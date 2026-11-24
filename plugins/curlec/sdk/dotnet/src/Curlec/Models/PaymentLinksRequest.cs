using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record PaymentLinksRequest
{
    /// <summary>
    /// Amount in smallest currency unit (paise for INR). Example: 50000 for ₹500.
    /// </summary>
    [JsonPropertyName("amount")]
    public required int Amount { get; init; }

    /// <summary>
    /// ISO 4217 currency code. UPI links support INR only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; } = "INR";

    /// <summary>
    /// Set true to create a UPI-only Payment Link. Not available in test mode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upi_link")]
    public bool? UpiLink { get; init; } = false;

    /// <summary>
    /// Enable partial payments. Not supported for UPI links.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accept_partial")]
    public bool? AcceptPartial { get; init; }

    /// <summary>
    /// Minimum first partial payment amount in paise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_min_partial_amount")]
    public int? FirstMinPartialAmount { get; init; }

    /// <summary>
    /// Unix timestamp for link expiry. Max 6 months from creation. Must be at least 15 minutes in the future.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expire_by")]
    public int? ExpireBy { get; init; }

    /// <summary>
    /// Your unique tracking reference. Max 40 characters. Must be unique.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference_id")]
    public string? ReferenceId { get; init; }

    /// <summary>
    /// Brief description shown on the payment page. Max 2048 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Customer contact details. Not auto-populated on checkout — customer must enter manually.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer")]
    public Customer1RazorpayPaymentLinksApi? Customer { get; init; }

    /// <summary>
    /// Notification handlers. Set true for Razorpay to send, false to handle yourself.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notify")]
    public Notify1? Notify { get; init; }

    /// <summary>
    /// Send automatic payment reminders.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reminder_enable")]
    public bool? ReminderEnable { get; init; }

    /// <summary>
    /// Redirect URL after payment completion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_url")]
    public string? CallbackUrl { get; init; }

    /// <summary>
    /// Required when callback_url is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback_method")]
    public CallbackMethod1? CallbackMethod { get; init; }

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    /// <summary>
    /// Checkout and payment page customization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public Options? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
