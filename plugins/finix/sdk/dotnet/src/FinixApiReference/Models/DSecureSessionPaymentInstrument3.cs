using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record DSecureSessionPaymentInstrument3
{
    /// <summary>
    /// The amount to authenticate, in the smallest unit of the currency (for example, <c>1000</c> = $10.00). This amount must match the <c>amount</c> of the <see href="/api/transfers">Transfer</see> or <see href="/api/authorizations">Authorization</see> you later create with the session. If the two amounts differ, the liability shift is downgraded.
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// The ID of the <see href="/api/merchants">Merchant</see> the payment processes under. Finix validates this ID against the <c>merchant</c> of the <see href="/api/transfers">Transfer</see> or <see href="/api/authorizations">Authorization</see> you create later with the session.
    /// </summary>
    [JsonPropertyName("merchant_id")]
    public required string MerchantId { get; init; }

    /// <summary>
    /// The ID of the <see href="/api/payment-instruments">Payment Instrument</see> to authenticate. Pass either <c>payment_instrument_id</c> or <c>token_id</c>, not both.
    /// </summary>
    [JsonPropertyName("payment_instrument_id")]
    public required string PaymentInstrumentId { get; init; }

    /// <summary>
    /// The URL the <see href="/api/identities">buyer</see> returns to after they finish authentication. The URL must use HTTPS.
    /// <para>
    /// Finix passes this URL to the 3D Secure vendor as the <c>redirect</c> parameter of <c>3d_secure_authentication_url</c>. When the buyer finishes, the vendor returns them to the URL with <c>?status={status}&amp;session={session_id}</c> appended. The <c>status</c> values are <c>success</c>, <c>failure</c>, and <c>error</c>.
    /// </para>
    /// <para>
    /// Only the redirect flow uses this field. Omit it when you collect the authentication with Finix.js.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirect_url")]
    public string? RedirectUrl { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
