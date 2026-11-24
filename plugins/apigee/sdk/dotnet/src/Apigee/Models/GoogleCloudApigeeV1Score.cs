using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Represents Security Score.
/// </summary>
public record GoogleCloudApigeeV1Score
{
    /// <summary>
    /// Component containing score, recommendations and actions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("component")]
    public GoogleCloudApigeeV1ScoreComponent2? Component { get; init; }

    /// <summary>
    /// Start and end time for the score.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeRange")]
    public GoogleTypeInterval5? TimeRange { get; init; }

    /// <summary>
    /// List of all the drilldown score components.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subcomponents")]
    public IReadOnlyList<GoogleCloudApigeeV1ScoreComponent>? Subcomponents { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
