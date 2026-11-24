using System.Text.Json.Serialization;

namespace Hud.Models;

public record ByokCredentialUpdateRequest
{
    [JsonPropertyName("value")]
    public required string Value { get; init; }
}
