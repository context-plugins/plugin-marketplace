using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentCard1
{
    /// <summary>
    /// The address of the card owner.
    /// <para>
    /// <b>Note</b>: Including a postal or zip code when creating a <c>Payment Instrument</c> can lower the interchange on credit card transactions.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public Address? Address { get; init; }

    /// <summary>
    /// The expiration month of the card (e.g. 12 for December).
    /// </summary>
    [JsonPropertyName("expiration_month")]
    public required int ExpirationMonth { get; init; }

    /// <summary>
    /// The 4-digit expiration year of the card.
    /// </summary>
    [JsonPropertyName("expiration_year")]
    public required int ExpirationYear { get; init; }

    /// <summary>
    /// The ID of the <c>Identity</c> used to create the <c>Payment Instrument</c> resource.
    /// </summary>
    [JsonPropertyName("identity")]
    public required string Identity { get; init; }

    /// <summary>
    /// The name of the card owner. This value can get truncated to comply with processor requirements.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The card or bank account number (no dashes in between numbers).
    /// </summary>
    [JsonPropertyName("number")]
    public required string Number { get; init; }

    /// <summary>
    /// The 3-or 4-digit security code for the card (i.e., the CVV code). While providing a CVV is optional, it is recommended to include it wherever possible to prevent fraud.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("security_code")]
    public string? SecurityCode { get; init; }

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
    /// Stringified token provided by Apple or Google. Required if using Apple or Google Pay.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("third_party_token")]
    public string? ThirdPartyToken { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "PAYMENT_CARD";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
