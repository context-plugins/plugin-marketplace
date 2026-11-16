using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record DSecureSessionToken3
{
    /// <summary>
    /// The amount to authenticate, in the smallest unit of the currency (for example, <c>1000</c> = $10.00). This amount must match the <c>amount</c> of the <c>Transfer</c> or <c>Authorization</c> you later create with the session. If the two amounts differ, the liability shift is downgraded.
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> the payment processes under. Finix validates this ID against the <c>merchant</c> of the <c>Transfer</c> or <c>Authorization</c> you later create with the session.
    /// </summary>
    [JsonPropertyName("merchant_id")]
    public required string MerchantId { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// The ID of the token to authenticate. Pass either <c>token_id</c> or <c>payment_instrument_id</c>, not both.
    /// </summary>
    [JsonPropertyName("token_id")]
    public required string TokenId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
