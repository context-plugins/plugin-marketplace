using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1GatesVerifyTokenResponse
{
    [JsonPropertyName("valid")]
    public required bool Valid { get; init; }

    [JsonPropertyName("reason")]
    public required Reason? Reason { get; init; }

    [JsonPropertyName("gateId")]
    public required string? GateId { get; init; }

    [JsonPropertyName("expiresAt")]
    public required string? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
