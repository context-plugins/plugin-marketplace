using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record AdditionalCategory
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }
}
