using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// The retry policy configuration for the Trigger. Can only be set with Cloud Run destinations.
/// </summary>
public record RetryPolicy
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
