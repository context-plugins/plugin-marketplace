using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ComputeEnvironmentScores.
/// </summary>
public record GoogleCloudApigeeV1ComputeEnvironmentScoresResponse
{
    /// <summary>
    /// A page token, received from a previous <c>ComputeScore</c> call. Provide this to retrieve the subsequent page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// List of scores. One score per day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scores")]
    public IReadOnlyList<GoogleCloudApigeeV1Score>? Scores { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
