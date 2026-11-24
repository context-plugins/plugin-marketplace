using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. The retry policy to use in the pipeline.
/// </summary>
public record GoogleCloudEventarcV1PipelineRetryPolicy2
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
