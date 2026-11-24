using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Dimension value attributes for the audience user row.
/// </summary>
public record V1BetaAudienceRow
{
    /// <summary>
    /// Each dimension value attribute for an audience user. One dimension value will be added for each dimension column requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionValues")]
    public IReadOnlyList<V1BetaAudienceDimensionValue>? DimensionValues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
