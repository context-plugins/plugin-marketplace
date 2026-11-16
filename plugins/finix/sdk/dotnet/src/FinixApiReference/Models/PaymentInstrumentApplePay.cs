using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentApplePay
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public Address? Address { get; init; }

    /// <summary>
    /// The <c>Identity#id</c> of the buyer and owner of the card.
    /// </summary>
    [JsonPropertyName("identity")]
    public required string Identity { get; init; }

    /// <summary>
    /// The <c>id</c> of the identity used when registering the business with Apple Pay through our registration API.
    /// </summary>
    [JsonPropertyName("merchant_identity")]
    public required string MerchantIdentity { get; init; }

    /// <summary>
    /// The <c>id</c> of the <c>Identity</c> used when registering the seller with Apple Pay through our registration API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

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
    /// Stringified token provided by Apple. Required to process Apple Pay transactions.
    /// </summary>
    [JsonPropertyName("third_party_token")]
    public required string ThirdPartyToken { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "APPLE_PAY";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
