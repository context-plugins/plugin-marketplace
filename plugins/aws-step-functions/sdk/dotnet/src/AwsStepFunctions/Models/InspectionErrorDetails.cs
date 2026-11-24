using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record InspectionErrorDetails
{
    /// <summary>
    /// The array index of the Catch which handled the exception.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("catchIndex")]
    public int? CatchIndex { get; init; }

    /// <summary>
    /// The array index of the Retry which handled the exception.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retryIndex")]
    public int? RetryIndex { get; init; }

    /// <summary>
    /// The duration in seconds of the backoff for a retry on a failed state invocation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retryBackoffIntervalSeconds")]
    public int? RetryBackoffIntervalSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
