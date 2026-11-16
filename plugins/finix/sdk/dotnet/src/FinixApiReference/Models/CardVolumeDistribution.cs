using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// The distribution of the merchant's credit card volume The sum of <c>card_volume_distribution</c> must be 100.
/// </summary>
public record CardVolumeDistribution
{
    /// <summary>
    /// The percentage of the merchant's volume that's card present (between 0 and 100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_present_percentage")]
    public int? CardPresentPercentage { get; init; }

    /// <summary>
    /// The percentage of the merchant's business that is eCommerce (between 0 and 100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ecommerce_percentage")]
    public int? EcommercePercentage { get; init; }

    /// <summary>
    /// The percentage of the merchant's business that is a mail or telephone order (between 0 and 100).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mail_order_telephone_order_percentage")]
    public int? MailOrderTelephoneOrderPercentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
