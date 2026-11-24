using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// A representation of the trigger resource.
/// </summary>
public record Trigger
{
    /// <summary>
    /// Output only. Server-assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Required. The resource name of the trigger. Must be unique within the location of the project and must be in <c>projects/{project}/locations/{location}/triggers/{trigger}</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. This checksum is computed by the server based on the value of other fields, and might be sent only on create requests to ensure that the client has an up-to-date value before proceeding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("etag")]
    public string? Etag { get; init; }

    /// <summary>
    /// Output only. The last-modified time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Output only. Whether or not this Trigger satisfies the requirements of physical zone separation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("satisfiesPzs")]
    public bool? SatisfiesPzs { get; init; }

    /// <summary>
    /// Optional. EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to <c>application/json</c> if the value is not defined.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventDataContentType")]
    public string? EventDataContentType { get; init; }

    /// <summary>
    /// Optional. Unordered list. The list of filters that applies to event attributes. Only events that match all the provided filters are sent to the destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventFilters")]
    public IReadOnlyList<EventFilter>? EventFilters { get; init; }

    /// <summary>
    /// Output only. The reason(s) why a trigger is in FAILED state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conditions")]
    public IReadOnlyDictionary<string, StateCondition>? Conditions { get; init; }

    /// <summary>
    /// Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The <c>iam.serviceAccounts.actAs</c> permission must be granted on the service account to allow a principal to impersonate the service account. For more information, see the <see href="/eventarc/docs/all-roles-permissions">Roles and permissions</see> page specific to the trigger destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public string? ServiceAccount { get; init; }

    /// <summary>
    /// Optional. User labels attached to the triggers that can be used to group resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Optional. To deliver messages, Eventarc might use other Google Cloud products as a transport intermediary. This field contains a reference to that transport intermediary. This information can be used for debugging purposes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transport")]
    public Transport2? Transport { get; init; }

    /// <summary>
    /// Optional. The name of the channel associated with the trigger in <c>projects/{project}/locations/{location}/channels/{channel}</c> format. You must provide a channel to receive events from Eventarc SaaS partners.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channel")]
    public string? Channel { get; init; }

    /// <summary>
    /// Required. Destination specifies where the events should be sent to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination")]
    public Destination2? Destination { get; init; }

    /// <summary>
    /// Optional. The retry policy to use in the Trigger. If unset, event delivery will be retried for up to 24 hours by default: https://cloud.google.com/eventarc/docs/retry-events
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retryPolicy")]
    public RetryPolicy2? RetryPolicy { get; init; }

    /// <summary>
    /// Output only. The creation time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
