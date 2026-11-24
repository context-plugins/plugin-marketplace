using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

/// <summary>
/// Combined statistics for all calls
/// </summary>
public record All
{
    /// <summary>
    /// Total cost of all calls
    /// </summary>
    [JsonPropertyName("total")]
    public required string Total { get; init; }

    /// <summary>
    /// Total number of all calls
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
