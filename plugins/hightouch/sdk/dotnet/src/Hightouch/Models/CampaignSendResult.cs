using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

/// <summary>
/// Per-recipient result returned synchronously after the trigger request.
/// Accepted recipients are queued for delivery; check the send status endpoint
/// for delivery confirmation.
/// </summary>
public record CampaignSendResult
{
    /// <summary>
    /// Delivery address of the recipient, present for inline (<c>handle</c>) recipients.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("handle")]
    public string? Handle { get; init; }

    /// <summary>
    /// Primary key of the recipient as configured on the Personalization API sync,
    /// present for profile (<c>id</c>) recipients.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Whether this recipient was accepted for delivery or rejected at validation time.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// Unique identifier for this send, present when <c>status</c> is <c>"accepted"</c>.
    /// Use with <c>POST /campaigns/{id}/sends/batch-get</c> to poll for delivery
    /// status; it accepts up to 100 <c>sendId</c> values per request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sendId")]
    public string? SendId { get; init; }

    /// <summary>
    /// Reason for rejection, present when <c>status</c> is <c>"rejected"</c>.
    /// - <c>invalid_handle</c> — the delivery address is not a valid email or phone number
    /// - <c>missing_variables</c> — one or more required template variables are absent
    ///   (<c>handle</c> recipients only; <c>id</c> recipients are checked at send time)
    /// - <c>invalid_id</c> — the profile ID is empty or missing
    /// - <c>missing_handle_or_id</c> — the recipient has neither <c>handle</c> nor <c>id</c>
    /// - <c>invalid_locale</c> — the <c>locale</c> is empty or longer than 7 characters
    /// - <c>whatsapp_marketing_us_number</c> — the message uses a marketing WhatsApp template, which Meta does not deliver to US phone numbers
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason? Reason { get; init; }

    /// <summary>
    /// Names of the required template variables absent from the recipient's data,
    /// present when <c>reason</c> is <c>"missing_variables"</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("missingVariables")]
    public IReadOnlyList<string>? MissingVariables { get; init; }
}
