using System.Text.Json.Serialization;

namespace Basiq.Models;

public record Permission
{
    [JsonPropertyName("scope")]
    public required string Scope { get; init; }

    [JsonPropertyName("required")]
    public required bool Required { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consented")]
    public bool? Consented { get; init; }

    [JsonPropertyName("entity")]
    public required string Entity { get; init; }

    [JsonPropertyName("information")]
    public required Information Information { get; init; }

    [JsonPropertyName("purpose")]
    public required Primary Purpose { get; init; }
}
