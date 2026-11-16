using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record EnableBuyerCharges
{
    /// <summary>
    /// Set to <b>true</b> if you want to enable the <c>Merchant</c> to accept convenience fees and/or service fees.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("convenience_charges_enabled")]
    public bool? ConvenienceChargesEnabled { get; init; }

    /// <summary>
    /// Set to <b>true</b> if you want to enable a <c>Merchant</c> to accept rent charges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rent_surcharges_enabled")]
    public bool? RentSurchargesEnabled { get; init; }

    /// <summary>
    /// Set to <b>true</b> if you want to enable a <c>Merchant</c> to accept surcharge fees.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surcharge_fees_enabled")]
    public bool? SurchargeFeesEnabled { get; init; }

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
