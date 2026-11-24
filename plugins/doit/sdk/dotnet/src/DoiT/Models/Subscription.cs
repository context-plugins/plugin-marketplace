using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Subscription details for a G Suite or Office 365 asset.
/// </summary>
public record Subscription
{
    /// <summary>
    /// The billing method, e.g. ONLINE or OFFLINE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingMethod")]
    public string? BillingMethod { get; init; }

    /// <summary>
    /// The time when the subscription was created, in milliseconds since the epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationTime")]
    public long? CreationTime { get; init; }

    /// <summary>
    /// The unique identifier of the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Plan details for a subscription, indicating whether it is a commitment or flexible plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan")]
    public SubscriptionPlan? Plan { get; init; }

    /// <summary>
    /// The purchase order ID associated with this subscription, if any.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseOrderID")]
    public string? PurchaseOrderId { get; init; }

    /// <summary>
    /// Settings that control subscription renewal behavior at the end of a commitment term.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("renewalSettings")]
    public RenewalSettings? RenewalSettings { get; init; }

    /// <summary>
    /// A URL to the subscription management page in the admin console.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceUIURL")]
    public string? ResourceUiurl { get; init; }

    /// <summary>
    /// Licensing seat counts for a subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seats")]
    public Seats? Seats { get; init; }

    /// <summary>
    /// The unique SKU identifier for the subscribed product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skuID")]
    public string? SkuId { get; init; }

    /// <summary>
    /// A human-readable name for the subscribed product SKU.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("skuName")]
    public string? SkuName { get; init; }

    /// <summary>
    /// The current status of the subscription, e.g. ACTIVE, SUSPENDED, or PENDING.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
