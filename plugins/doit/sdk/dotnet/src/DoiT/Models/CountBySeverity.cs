using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Count of matching anomalies per severity level. All three keys are always present, with zero counts included.
/// </summary>
public record CountBySeverity
{
    [JsonPropertyName("information")]
    public required long Information { get; init; }

    [JsonPropertyName("warning")]
    public required long Warning { get; init; }

    [JsonPropertyName("critical")]
    public required long Critical { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
