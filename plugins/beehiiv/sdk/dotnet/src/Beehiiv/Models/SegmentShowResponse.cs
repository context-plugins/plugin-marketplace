using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record SegmentShowResponse
{
    /// <summary>
    /// The segment object. To expand results, see the results endpoint.
    /// </summary>
    [JsonPropertyName("data")]
    public required Segment Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
