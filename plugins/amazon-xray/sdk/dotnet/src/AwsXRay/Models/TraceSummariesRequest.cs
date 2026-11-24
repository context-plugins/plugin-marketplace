using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;
using AwsXRay.Models.Enums;

namespace AwsXRay.Models;

public record TraceSummariesRequest
{
    /// <summary>
    /// The start of the time frame for which to retrieve traces.
    /// </summary>
    [JsonPropertyName("StartTime")]
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// The end of the time frame for which to retrieve traces.
    /// </summary>
    [JsonPropertyName("EndTime")]
    public required DateTimeOffset EndTime { get; init; }

    /// <summary>
    /// Query trace summaries by TraceId (trace start time), Event (trace update time), or Service (trace segment end time).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeRangeType")]
    public TimeRangeType? TimeRangeType { get; init; }

    /// <summary>
    /// Set to true to get summaries for only a subset of available traces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Sampling")]
    public bool? Sampling { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SamplingStrategy")]
    public SamplingStrategy? SamplingStrategy { get; init; }

    /// <summary>
    /// Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FilterExpression")]
    public string? FilterExpression { get; init; }

    /// <summary>
    /// Specify the pagination token returned by a previous request to retrieve the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
