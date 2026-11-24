using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record InsightImpactGraphRequest
{
    /// <summary>
    /// The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
    /// </summary>
    [JsonPropertyName("InsightId")]
    public required string InsightId { get; init; }

    /// <summary>
    /// The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided and can't be more than 30 days old.
    /// </summary>
    [JsonPropertyName("StartTime")]
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The time range between the start time and end time can't be more than six hours.
    /// </summary>
    [JsonPropertyName("EndTime")]
    public required DateTimeOffset EndTime { get; init; }

    /// <summary>
    /// Specify the pagination token returned by a previous request to retrieve the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
