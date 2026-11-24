using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record ServiceGraphRequest
{
    /// <summary>
    /// The start of the time frame for which to generate a graph.
    /// </summary>
    [JsonPropertyName("StartTime")]
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// The end of the timeframe for which to generate a graph.
    /// </summary>
    [JsonPropertyName("EndTime")]
    public required DateTimeOffset EndTime { get; init; }

    /// <summary>
    /// The name of a group based on which you want to generate a graph.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupName")]
    public string? GroupName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupARN")]
    public string? GroupArn { get; init; }

    /// <summary>
    /// Pagination token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
