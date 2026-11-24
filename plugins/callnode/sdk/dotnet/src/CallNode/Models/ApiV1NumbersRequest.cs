using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record ApiV1NumbersRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("friendlyName")]
    [MaxLength(100)]
    public string? FriendlyName { get; init; }

    /// <summary>
    /// Your own labels for the number. Trimmed, de-duplicated case-insensitively, returned on every number, filterable on the dashboard. PATCH replaces the whole list; send [] to clear.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    [MaxLength(10)]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Voice configuration — how inbound calls to this number are answered. Three modes: a conversational WEBHOOK agent (webhookUrl set), SIP DELIVERY to a literal endpoint (sipUri set), or SIP DELIVERY to one of your saved trunks (trunkId set). sipUri and trunkId are mutually exclusive — setting one clears the other, and either takes precedence over the webhook. Wholesale numbers must always keep at least one mode — a change that would leave none is rejected with 400.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voice")]
    public VoiceConfig? Voice { get; init; }

    /// <summary>
    /// Messaging webhook configuration for inbound SMS/MMS to this number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messaging")]
    public MessagingConfig? Messaging { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
