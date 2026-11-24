using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Core.Validation;
using CodeQr.Core.Validation.Attributes;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record TrackSaleRequest
{
    /// <summary>
    /// The unique ID of the customer in your system. Will be used to identify and attribute all future events to this customer.
    /// </summary>
    [JsonPropertyName("customerExternalId")]
    [StringLength(100, MinimumLength = 1)]
    public required string CustomerExternalId { get; init; }

    /// <summary>
    /// The amount of the sale in the smallest unit of <c>currency</c> — cents for two-decimal currencies, the full integer for zero-decimal ones (e.g. <c>1437</c> JPY), thousandths for three-decimal ones (e.g. <c>1437</c> KWD fils).
    /// </summary>
    [JsonPropertyName("amount")]
    [Minimum(0)]
    public required int Amount { get; init; }

    /// <summary>
    /// The currency of the sale, as an ISO 4217 code. Reporting is always in USD: non-USD sales are converted at the exchange rate of the day the sale is recorded, and the original amount and currency are kept on the event. The rate is not re-applied later, so reported totals do not move with the exchange rate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; } = "usd";

    /// <summary>
    /// The name of the sale event. Recommended format: <c>Invoice paid</c> or <c>Subscription created</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventName")]
    [MaxLength(255)]
    public string? EventName { get; init; } = "Purchase";

    /// <summary>
    /// The payment processor via which the sale was made.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentProcessor")]
    public PaymentProcessor? PaymentProcessor { get; init; } = PaymentProcessor.Custom;

    /// <summary>
    /// The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given invoice ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceId")]
    public string? InvoiceId { get; init; }

    /// <summary>
    /// Additional metadata to be stored with the sale event. Max 10,000 characters when stringified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, object>? Metadata { get; init; }

    /// <summary>
    /// The name of the lead event that occurred before the sale (case-sensitive). This is used to associate the sale event with a particular lead event (instead of the latest lead event for a link-customer combination, which is the default behavior). For direct sale tracking, this field can also be used to specify the lead event name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("leadEventName")]
    public string? LeadEventName { get; init; }

    /// <summary>
    /// [For direct sale tracking]: The unique ID of the click that the sale conversion event is attributed to. You can read this value from <c>cq_id</c> cookie.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clickId")]
    public string? ClickId { get; init; }

    /// <summary>
    /// [For direct sale tracking]: The name of the customer. If not passed, a random name will be generated (e.g. “Big Red Caribou”).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerName")]
    [MaxLength(100)]
    public string? CustomerName { get; init; }

    /// <summary>
    /// [For direct sale tracking]: The email address of the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerEmail")]
    [MaxLength(100)]
    [Format(FormatKind.Email)]
    public string? CustomerEmail { get; init; }

    /// <summary>
    /// [For direct sale tracking]: The avatar URL of the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerAvatar")]
    public string? CustomerAvatar { get; init; }

    /// <summary>
    /// Deduplication key shared with your own browser pixel. When your site also fires a Meta or TikTok pixel for this conversion, pass the same event id here so the platform counts it once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventId")]
    [MaxLength(255)]
    public string? EventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
