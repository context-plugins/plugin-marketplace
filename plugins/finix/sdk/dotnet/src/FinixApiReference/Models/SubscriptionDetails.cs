using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object containing subscription details.
/// </summary>
public record SubscriptionDetails
{
    /// <summary>
    /// The method by which subscription payments are collected. Currently, automatic billing of the <c>Payment Instrument</c> is the only available method.
    /// </summary>
    [JsonPropertyName("collection_method")]
    public string CollectionMethod { get; } = "BILL_AUTOMATICALLY";

    /// <summary>
    /// Whether to send the user an invoice.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_invoice")]
    public bool? SendInvoice { get; init; }

    /// <summary>
    /// Whether to send the user a receipt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_receipt")]
    public bool? SendReceipt { get; init; }

    /// <summary>
    /// Object containing trial details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trial_details")]
    public TrialDetails? TrialDetails { get; init; }

    /// <summary>
    /// Object containing discount phase details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_phase_details")]
    public DiscountPhaseDetails? DiscountPhaseDetails { get; init; }

    /// <summary>
    /// Object containing notification preferences.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notification_preferences")]
    public NotificationPreferences? NotificationPreferences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
