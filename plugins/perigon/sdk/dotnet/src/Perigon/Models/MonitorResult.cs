using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Single monitor response.
/// </summary>
public record MonitorResult
{
    /// <summary>
    /// Monitor payload.
    /// </summary>
    [JsonPropertyName("data")]
    public required SignalApiDto Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
