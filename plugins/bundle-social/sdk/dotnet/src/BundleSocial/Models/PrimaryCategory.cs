using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record PrimaryCategory
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }
}
