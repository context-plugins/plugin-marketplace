using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. The retry policy to use in the Trigger. If unset, event delivery will be retried for up to 24 hours by default: https://cloud.google.com/eventarc/docs/retry-events
/// </summary>
public record RetryPolicy2
{
    /// <summary>
    /// Optional. The maximum number of delivery attempts for any message. The only valid value is 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxAttempts")]
    public int? MaxAttempts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
