using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing <c>Payment Instrument</c> details.
/// </summary>
public record PaymentInstrumentDetails
{
    /// <summary>
    /// The ID of the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type26? Type { get; init; }

    /// <summary>
    /// The primary address associated with the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billing_address")]
    public BillingAddress? BillingAddress { get; init; }

    /// <summary>
    /// The Bank Identification Number for the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bin")]
    public string? Bin { get; init; }

    /// <summary>
    /// The <c>brand</c> of the card saved in the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brand")]
    public Brand? Brand { get; init; }

    /// <summary>
    /// The type of payment card saved in the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_type")]
    public CardType? CardType { get; init; }

    /// <summary>
    /// The last four digits of the card or bank account number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_four")]
    public string? LastFour { get; init; }

    /// <summary>
    /// The name of the bank account or card owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
