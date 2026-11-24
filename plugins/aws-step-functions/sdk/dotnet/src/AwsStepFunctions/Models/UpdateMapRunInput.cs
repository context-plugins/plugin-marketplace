using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record UpdateMapRunInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of a Map Run.
    /// </summary>
    [JsonPropertyName("mapRunArn")]
    public required string MapRunArn { get; init; }

    /// <summary>
    /// The maximum number of child workflow executions that can be specified to run in parallel for the Map Run at the same time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrency")]
    public int? MaxConcurrency { get; init; }

    /// <summary>
    /// The maximum percentage of failed items before the Map Run fails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toleratedFailurePercentage")]
    public double? ToleratedFailurePercentage { get; init; }

    /// <summary>
    /// The maximum number of failed items before the Map Run fails.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toleratedFailureCount")]
    public int? ToleratedFailureCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
