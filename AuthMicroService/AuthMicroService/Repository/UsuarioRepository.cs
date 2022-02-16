using AuthMicroService.Models;

namespace AuthMicroService.Repository
{
    public class UsuarioRepository
    {
        public Usuario GetUser(string nome, string senha)
        {
            var listaDeUsuarios = new List<Usuario>
            {
                new () { Id = 1, Nome = "Leandro", Papel = "Gerente", Senha = "123456" }
            };

            return listaDeUsuarios.FirstOrDefault(usuario => usuario.Nome == nome && usuario.Senha == senha);
        }
    }
}
