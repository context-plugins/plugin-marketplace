using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record IdrRunStats
{
    /// <summary>
    /// The exact number of rows processed from sources in this run.
    /// </summary>
    [JsonPropertyName("numSourceRows")]
    public required double NumSourceRows { get; init; }

    /// <summary>
    /// The exact number of unique profiles in the graph created during this run.
    /// </summary>
    [JsonPropertyName("numNewUniqueProfiles")]
    public required double NumNewUniqueProfiles { get; init; }

    /// <summary>
    /// The exact number of unique profiles in the graph at the end of the run.
    /// </summary>
    [JsonPropertyName("numUniqueProfiles")]
    public required double NumUniqueProfiles { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
