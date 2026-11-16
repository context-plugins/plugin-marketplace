using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Additional charges will be incurred by the buyer.
/// <para>
/// The following rules apply:
/// </para>
/// <list type="bullet">
///   <item><description>The <c>Merchant</c> must be enabled to charge these surcharges by setting the appropriate flags for each applicable surcharge to <c>true</c> using the PUT <c>/merchants</c> endpoint.</description></item>
///   <item><description>Only _one_ of the following charges can be applied during creation.</description></item>
/// </list>
/// </summary>
public record AdditionalBuyerCharges
{
    /// <summary>
    /// A convenience fee to charge the buyer for the transaction. This object property is mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("convenience_amount")]
    public int? ConvenienceAmount { get; init; }

    /// <summary>
    /// A rent surcharge to charge the buyer for the transaction. This object property is mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rent_surcharge_amount")]
    public int? RentSurchargeAmount { get; init; }

    /// <summary>
    /// A surcharge amount to charge the buyer for the transaction. This object property is mutually exclusive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surcharge_amount")]
    public int? SurchargeAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
