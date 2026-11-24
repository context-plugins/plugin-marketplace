using System;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

public record CheckoutSession
{
    /// <summary>
    /// Unique identifier for the checkout Session, assigned by Tabby.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// Some details associated with the current session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configuration")]
    public ConfigurationModel? Configuration { get; init; }

    /// <summary>
    /// In the response, this field will be filled with <c>token</c> value if session status is 'approved'.
    /// You can use that token for Tokenized Payments and Web Checkout.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("token")]
    public string? Token { get; init; }

    /// <summary>
    /// Payment object associated with the current session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment")]
    public CheckoutResponsePayment? Payment { get; init; }

    /// <summary>
    /// Status of the current session. Used at the pre-scoring and session creation steps.
    ///   - <c>created</c> is returned when the request is approved and the customer is eligible to use Tabby
    ///   - <c>rejected</c> means that there are no available products for a customer
    ///   - <c>expired</c> and <c>approved</c> - used for specific type of integration, kindly ignore them if not communicated directly
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_urls")]
    public MerchantUrls2? MerchantUrls { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
