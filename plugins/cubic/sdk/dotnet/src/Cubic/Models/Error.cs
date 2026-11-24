using System.Text.Json.Serialization;

namespace Cubic.Models;

public record Error
{
    [JsonPropertyName("error")]
    public required Error1 ErrorValue { get; init; }
}
