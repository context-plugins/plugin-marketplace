using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// A recipient identified by their Personalization API Cached profile ID.
/// Template variables are checked at send time, after the cached profile is
/// merged with <c>properties</c>. A required variable (one without a Liquid default)
/// missing from both drops the send, which the send status endpoint reports as
/// <c>dropped</c>. A variable present with a null or empty value renders blank.
/// </summary>
public record ProfileCampaignRecipient
{
    /// <summary>
    /// Primary key of the recipient as configured on the Personalization API sync.
    /// The delivery address is resolved from the cache at send time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Per-recipient personalization overrides. Merged with the top-level
    /// <c>properties</c> and the cached profile; these values take precedence when a
    /// key appears in multiple sources.
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
