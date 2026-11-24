using System.Text.Json.Serialization;

namespace Basiq.Models;

public record Purpose
{
    [JsonPropertyName("primary")]
    public required Primary Primary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("other")]
    public bool? Other { get; init; }
}
