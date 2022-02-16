namespace AuthMicroService.Models
{
    public class Usuario
    {
        public long? Id { get; set; }
        public string Nome { get; set; }
        public string Senha { get; set; }
        public string? Papel { get; set; }

        public Usuario (long id, string nome, string senha, string papel)
        {
            Id = id;
            Nome = nome;
            Senha = senha;
            Papel = papel;
        }

        public Usuario()
        {
        }
    }
}
