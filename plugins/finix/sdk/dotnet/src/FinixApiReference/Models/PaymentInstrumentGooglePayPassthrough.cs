using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentGooglePayPassthrough
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public Address? Address { get; init; }

    /// <summary>
    /// Wallet-generated cryptogram from the decrypted Google Pay token. Not required for PAN_ONLY tokens, which do not produce a cryptogram.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cryptogram")]
    public string? Cryptogram { get; init; }

    /// <summary>
    /// One-or-two-digit value indicating the authentication method used. The card network and issuer factor this into liability and risk decisions on the authorization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("electronic_commerce_indicator_code")]
    public string? ElectronicCommerceIndicatorCode { get; init; }

    /// <summary>
    /// Card expiration month (1-12).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_month")]
    public int? ExpirationMonth { get; init; }

    /// <summary>
    /// Card expiration year (4-digit).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_year")]
    public int? ExpirationYear { get; init; }

    /// <summary>
    /// The ID of the <c>Identity</c> used to create the <c>Payment Instrument</c> resource.
    /// </summary>
    [JsonPropertyName("identity")]
    public required string Identity { get; init; }

    /// <summary>
    /// The <c>id</c> of the identity used when registering the business with Google Pay through our registration API.
    /// </summary>
    [JsonPropertyName("merchant_identity")]
    public required string MerchantIdentity { get; init; }

    /// <summary>
    /// The name of the bank account or card owner. This value can get truncated to comply with processor requirements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Network token PAN (DPAN) from the decrypted Google Pay token. May be a raw PAN for Google Pay.
    /// </summary>
    [JsonPropertyName("number")]
    public required string Number { get; init; }

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
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "GOOGLE_PAY";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
