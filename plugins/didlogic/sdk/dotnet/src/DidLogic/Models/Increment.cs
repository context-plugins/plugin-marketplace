using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record Increment
{
    /// <summary>
    /// Seconds billed for the first block
    /// </summary>
    [JsonPropertyName("initial")]
    public required int Initial { get; init; }

    /// <summary>
    /// Seconds per block after the first
    /// </summary>
    [JsonPropertyName("unit")]
    public required int Unit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
