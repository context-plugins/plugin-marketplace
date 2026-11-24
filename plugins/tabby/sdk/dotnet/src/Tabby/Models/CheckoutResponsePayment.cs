using System;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

/// <summary>
/// Payment object associated with the current session.
/// </summary>
public record CheckoutResponsePayment
{
    /// <summary>
    /// Unique identifier for the payment (UUID), assigned by Tabby. Save it on your side!
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// Date and time the payment was created, in UTC, and displayed in ISO 8601 datetime format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Status of the current payment:
    /// - <c>CREATED</c> means that the payment is created successfully, but not finished yet;
    /// - <c>AUTHORIZED</c> and <c>CLOSED</c> mark the successfully approved and captured payments accordingly;
    /// - <c>REJECTED</c> is returned when a customer is rejected during Tabby Checkout;
    /// - <c>EXPIRED</c> is used when a customer cancels a payment or when Tabby doesn't receive a successfully paid transaction after timeout.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public PaymentStatus? Status { get; init; }

    /// <summary>
    /// Indicates whether this is a test payment (created using the Test API keys or Production API Keys).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_test")]
    public bool? IsTest { get; init; }

    /// <summary>
    /// Total payment amount, including tax, shipping and any discounts. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// ISO 4217 currency code for the payment amount. Currently there are 3 possible currency options - depending on the country where the store is located:
    ///   - <c>AED</c> - United Arab Emirates Dirham
    ///   - <c>SAR</c> - Saudi Riyal
    ///   - <c>KWD</c> - Kuwaiti Dinar
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("order")]
    public required OrderResponse? Order { get; init; }

    /// <summary>
    /// Merchant-defined data about the payment. This field is a key-value map. The example properties provided below.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public Meta? Meta { get; init; }

    /// <summary>
    /// Extra data (booking info, insurance, flight reservations, ...) as serialized JSON
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment")]
    public AttachmentV1? Attachment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
