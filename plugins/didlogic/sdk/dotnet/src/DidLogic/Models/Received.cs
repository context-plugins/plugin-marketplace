using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// Statistics for received (incoming) calls
/// </summary>
public record Received
{
    /// <summary>
    /// Total cost of received calls
    /// </summary>
    [JsonPropertyName("total")]
    public required string Total { get; init; }

    /// <summary>
    /// Number of received calls
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
