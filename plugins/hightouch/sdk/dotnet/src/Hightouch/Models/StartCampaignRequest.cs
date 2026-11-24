using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hightouch.Models.AnyOf;

namespace Hightouch.Models;

/// <summary>
/// Request body for triggering an API campaign send.
/// </summary>
public record StartCampaignRequest
{
    /// <summary>
    /// Shared personalization properties applied to all recipients. Keys must
    /// match the variable names shown in the message editor. Per-recipient
    /// <c>properties</c> take precedence when a key appears in both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, object>? Properties { get; init; }

    /// <summary>
    /// When <c>true</c>, sends the campaign even if it has not been activated.
    /// Intended for test sends against draft campaigns only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("draft")]
    public bool? Draft { get; init; } = false;

    /// <summary>
    /// List of recipients to send to. Each entry must include either a <c>handle</c>
    /// (delivery address) or an <c>id</c> (Personalization API based profile ID).
    /// </summary>
    [JsonPropertyName("recipients")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<CampaignRecipient> Recipients { get; init; }
}
