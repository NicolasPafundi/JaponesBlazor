public class GramaticaModel
{
    public int Id { get; set; }
    public int CapituloId { get; set; }
    public string Titulo { get; set; } = "";
    public List<ExplicacionModel> Explicaciones { get; set; } = [];
}