using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record Account
{
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonPropertyName("suspension_reason")]
    public required string? SuspensionReason { get; init; }

    [JsonPropertyName("test")]
    public required bool? Test { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
