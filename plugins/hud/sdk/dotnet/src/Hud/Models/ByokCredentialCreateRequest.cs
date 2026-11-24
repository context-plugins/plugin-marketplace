using System.Text.Json.Serialization;
using Hud.Models.Enums;

namespace Hud.Models;

public record ByokCredentialCreateRequest
{
    [JsonPropertyName("provider_id")]
    public required int ProviderId { get; init; }

    [JsonPropertyName("scope")]
    public required Scope Scope { get; init; }

    [JsonPropertyName("value")]
    public required string Value { get; init; }
}
