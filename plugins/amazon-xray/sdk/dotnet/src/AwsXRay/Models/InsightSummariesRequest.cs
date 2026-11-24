using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;
using AwsXRay.Models.Enums;

namespace AwsXRay.Models;

public record InsightSummariesRequest
{
    /// <summary>
    /// The list of insight states.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("States")]
    public IReadOnlyList<State1>? States { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupARN")]
    public string? GroupArn { get; init; }

    /// <summary>
    /// The name of the group. Required if the GroupARN isn't provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupName")]
    public string? GroupName { get; init; }

    /// <summary>
    /// The beginning of the time frame in which the insights started. The start time can't be more than 30 days old.
    /// </summary>
    [JsonPropertyName("StartTime")]
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// The end of the time frame in which the insights ended. The end time can't be more than 30 days old.
    /// </summary>
    [JsonPropertyName("EndTime")]
    public required DateTimeOffset EndTime { get; init; }

    /// <summary>
    /// The maximum number of results to display.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// Pagination token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
