using AuthMicroService.Models;
using AuthMicroService.Repository;
using AuthMicroService.Service;
using Microsoft.AspNetCore.Mvc;

namespace AuthMicroService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] Usuario usuario)
        {
            var repo = new UsuarioRepository();

            var user = repo.GetUser(usuario.Nome, usuario.Senha);

            if(user == null)
                return NotFound();

            var token = TokenService.GerarToken(user);

            return Ok(new { token = token, nome = user.Nome });
        }
    }
}
