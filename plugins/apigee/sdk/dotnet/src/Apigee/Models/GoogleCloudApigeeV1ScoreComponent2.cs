using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Component containing score, recommendations and actions.
/// </summary>
public record GoogleCloudApigeeV1ScoreComponent2
{
    /// <summary>
    /// List of recommendations to improve API security.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendations")]
    public IReadOnlyList<GoogleCloudApigeeV1ScoreComponentRecommendation>? Recommendations { get; init; }

    /// <summary>
    /// Path of the component. Example: /org@myorg/envgroup@myenvgroup/proxies/proxy@myproxy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scorePath")]
    public string? ScorePath { get; init; }

    /// <summary>
    /// Time when score was calculated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("calculateTime")]
    public string? CalculateTime { get; init; }

    /// <summary>
    /// Score for the component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("score")]
    public int? Score { get; init; }

    /// <summary>
    /// Time in the requested time period when data was last captured to compute the score.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataCaptureTime")]
    public string? DataCaptureTime { get; init; }

    /// <summary>
    /// List of paths for next components.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("drilldownPaths")]
    public IReadOnlyList<string>? DrilldownPaths { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
