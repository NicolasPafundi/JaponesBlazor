using JaponesBlazor.Models;
using System.Text.Json.Serialization;

public class VocabularioModel
{
    public int Id { get; set; }
    public int CapituloId { get; set; }
    public string Jap { get; set; } = "";
    public string Esp { get; set; } = "";
    public string Notas { get; set; } = "";
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public CategoriaEnum Categoria { get; set; }
}
