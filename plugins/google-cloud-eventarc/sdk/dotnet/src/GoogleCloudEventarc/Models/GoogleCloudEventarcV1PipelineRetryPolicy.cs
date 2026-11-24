using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// The retry policy configuration for the Pipeline. The pipeline exponentially backs off in case the destination is non responsive or returns a retryable error code. The default semantics are as follows: The backoff starts with a 5 second delay and doubles the delay after each failed attempt (10 seconds, 20 seconds, 40 seconds, etc.). The delay is capped at 60 seconds by default. Please note that if you set the min_retry_delay and max_retry_delay fields to the same value this will make the duration between retries constant.
/// </summary>
public record GoogleCloudEventarcV1PipelineRetryPolicy
{
    /// <summary>
    /// Optional. The maximum amount of seconds to wait between retry attempts. The value must be between 1 and 600. The default value for this field is 60.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxRetryDelay")]
    public string? MaxRetryDelay { get; init; }

    /// <summary>
    /// Optional. The maximum number of delivery attempts for any message. The value must be between 1 and 100. The default value for this field is 5.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxAttempts")]
    public int? MaxAttempts { get; init; }

    /// <summary>
    /// Optional. The minimum amount of seconds to wait between retry attempts. The value must be between 1 and 600. The default value for this field is 5.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minRetryDelay")]
    public string? MinRetryDelay { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
