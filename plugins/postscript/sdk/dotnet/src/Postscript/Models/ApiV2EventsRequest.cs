using System;
using System.Text.Json.Serialization;
using Postscript.Core.Models;

namespace Postscript.Models;

public record ApiV2EventsRequest
{
    /// <summary>
    /// The type of event that you are creating. This is the name of the event that will show in the Postscript application. <b>Note:</b> when creating this event, we will *automatically* prefix your partner/shop name in front of the event. For example, if sending an event called "OrderPlaced", we'll show it in our UI as "[Your Partner/Shop Name] - OrderPlaced" to distinguish it from others of a similar name. We accept the follow characters in the value field: lowercase letters (a-z), uppercase letters (A-Z), digits (0-9), and underscores (_).
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The ID of the subscriber that you are creating the event for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscriber_id")]
    public string? SubscriberId { get; init; }

    /// <summary>
    /// The phone number of the subscriber that you are creating the event for. E.164 format is recommended, but other formats will be accepted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// The email of the subscriber that you are creating the event for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// When the event occurred. This parameter is optional but allows you to set the exact time that the event occurred on your system. If it is not sent to us, we will just use the current time when we receive it. The following UTC time format is supported: %Y-%m-%d %H:%M:%S.%f
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("occurred_at")]
    public DateTimeOffset? OccurredAt { get; init; }

    /// <summary>
    /// These are the properties of the event. These properties will be exposed in the Postscript platform for things like filtering and merge tags to merchants.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public Properties? Properties { get; init; }

    /// <summary>
    /// The unique id of the event on your system. This is an optional field. If a value is not provided, we will create a default id ourselves based on time of event received.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    public string? ExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
