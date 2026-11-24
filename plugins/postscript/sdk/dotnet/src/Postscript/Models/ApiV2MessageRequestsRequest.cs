using System;
using System.Text.Json.Serialization;
using Postscript.Core.Models;
using Postscript.Models.Enums;

namespace Postscript.Models;

public record ApiV2MessageRequestsRequest
{
    /// <summary>
    /// The ID of the subscriber to send the message to. Either <c>subscriber_id</c> or <c>phone</c> is <b>required</b>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscriber_id")]
    public string? SubscriberId { get; init; }

    /// <summary>
    /// The phone number of the subscriber to send the message to. The subscriber must exist. Either <c>phone</c> or <c>subscriber_id</c> is <b>required</b>. The phone number of the subscriber you want to send the message to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// ISO Alpha-2 country code, used to parse <c>phone</c> more accurately.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; } = "US";

    /// <summary>
    /// The message body that you want to send to the subscriber.
    /// </summary>
    [JsonPropertyName("body")]
    public required string Body { get; init; }

    /// <summary>
    /// The category of message you are sending.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public Category? Category { get; init; } = Category.Promotional;

    /// <summary>
    /// ISO 8601 datetime to schedule delivery in the future. Default: <c>null</c> (deliver ASAP)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduled_at")]
    public DateTimeOffset? ScheduledAt { get; init; }

    /// <summary>
    /// The URL of the media to send with the message. The media can be of type <c>gif</c>, <c>png</c>, and <c>jpeg</c> and will be formatted correctly on the recipient's device. The media size limit is 1MB for supported file types (JPEG, PNG, GIF) and 500KB for other types of accepted media. Please note that if you include a media url with your message, then it gets sent as an MMS message, which has different costs and character limits than SMS messages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("media_url")]
    public string? MediaUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
