using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;
using GoogleCloudStorageTransferService.Models.Enums;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following <c>PubsubMessage.attributes</c>: * <c>"eventType"</c>: one of the EventType values * <c>"payloadFormat"</c>: one of the PayloadFormat values * <c>"projectId"</c>: the project_id of the <c>TransferOperation</c> * <c>"transferJobName"</c>: the transfer_job_name of the <c>TransferOperation</c> * <c>"transferOperationName"</c>: the name of the <c>TransferOperation</c> The <c>PubsubMessage.data</c> contains a TransferOperation resource formatted according to the specified <c>PayloadFormat</c>.
/// </summary>
public record NotificationConfig
{
    /// <summary>
    /// Required. The desired format of the notification message payloads.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payloadFormat")]
    public PayloadFormat? PayloadFormat { get; init; }

    /// <summary>
    /// Required. The <c>Topic.name</c> of the Pub/Sub topic to which to publish notifications. Must be of the format: <c>projects/{project}/topics/{topic}</c>. Not matching this format results in an INVALID_ARGUMENT error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pubsubTopic")]
    public string? PubsubTopic { get; init; }

    /// <summary>
    /// Event types for which a notification is desired. If empty, send notifications for all event types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventTypes")]
    public IReadOnlyList<EventType>? EventTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
