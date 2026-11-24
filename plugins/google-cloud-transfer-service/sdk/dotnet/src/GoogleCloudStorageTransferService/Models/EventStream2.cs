using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored.
/// </summary>
public record EventStream2
{
    /// <summary>
    /// Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. After this time, any transfers in progress will complete, but no new transfers are initiated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventStreamExpirationTime")]
    public string? EventStreamExpirationTime { get; init; }

    /// <summary>
    /// Required. Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Specifies the date and time that Storage Transfer Service starts listening for events from this stream. If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventStreamStartTime")]
    public string? EventStreamStartTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
