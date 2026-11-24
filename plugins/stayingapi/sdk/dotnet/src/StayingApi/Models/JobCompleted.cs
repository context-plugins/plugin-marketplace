using System.Text.Json.Serialization;
using StayingApi.Core.Models;

namespace StayingApi.Models;

/// <summary>
/// completed — the endpoint payload is at data.result and meta carries the full success meta (credits charged once, platformResults, warnings; pagination is null on a job result).
/// </summary>
public record JobCompleted
{
    [JsonPropertyName("data")]
    public required Data1 Data { get; init; }

    /// <summary>
    /// Canonical response metadata present on every 200 (§6.3.3).
    /// </summary>
    [JsonPropertyName("meta")]
    public required Meta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
