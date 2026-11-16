using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing the <c>Payment Instrument</c> details after the card update.
/// </summary>
public record NewInstrumentDetails
{
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
    /// The expiration month of the card (e.g., <c>12</c> for December).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_month")]
    public int? ExpirationMonth { get; init; }

    /// <summary>
    /// The 4-digit expiration year of the card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_year")]
    public int? ExpirationYear { get; init; }

    /// <summary>
    /// The last four digits of the card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_four")]
    public string? LastFour { get; init; }

    /// <summary>
    /// Unique ID that represents the tokenized card data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fingerprint")]
    public string? Fingerprint { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
