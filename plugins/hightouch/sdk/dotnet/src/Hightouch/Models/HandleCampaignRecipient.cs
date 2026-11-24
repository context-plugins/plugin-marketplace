using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// A recipient identified by their delivery address (email or phone number).
/// Personalization data is provided inline in the request.
/// </summary>
public record HandleCampaignRecipient
{
    /// <summary>
    /// Delivery address for this recipient. Must be a valid email address for
    /// email campaigns, or an E.164-formatted phone number for SMS and WhatsApp campaigns.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("handle")]
    public string? Handle { get; init; }

    /// <summary>
    /// Per-recipient personalization properties. Keys must match the variable
    /// names shown in the message editor. These are merged with the top-level
    /// <c>properties</c> and take precedence when a key appears in both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, object>? Properties { get; init; }

    /// <summary>
    /// The recipient's locale as a BCP 47 language tag, such as <c>es-ES</c>, matched
    /// against the locales the message is localized into (case-insensitive). When
    /// omitted, the recipient gets the message's source language. A locale the
    /// message is not localized into follows the workspace's localization fallback
    /// setting. At most 7 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locale")]
    public string? Locale { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
