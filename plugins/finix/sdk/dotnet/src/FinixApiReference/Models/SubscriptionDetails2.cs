using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object containing subscription details.
/// </summary>
public record SubscriptionDetails2
{
    /// <summary>
    /// The method by which subscription payments are collected. Currently, automatic billing of the <c>Payment Instrument</c> is the only available method.
    /// </summary>
    [JsonPropertyName("collection_method")]
    public string CollectionMethod { get; } = "BILL_AUTOMATICALLY";

    /// <summary>
    /// Object containing discount phase details. If the <c>Subscription</c> is based on a <see href="/api/subscription-plans">Subscription Plan</see>, <c>discount_phase_details</c> do not override the plan's values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount_phase_details")]
    public DiscountPhaseDetails1? DiscountPhaseDetails { get; init; }

    /// <summary>
    /// Object containing notification preferences. At least one <c>buyer_details.requested_delivery_method</c> is required if notification preferences are set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notification_preferences")]
    public NotificationPreferences1? NotificationPreferences { get; init; }

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
    /// Object containing trial details. If the <c>Subscription</c> is based on a <see href="/api/subscription-plans">Subscription Plan</see>, <c>trial_details</c> do not override those from the plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trial_details")]
    public TrialDetails1? TrialDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
