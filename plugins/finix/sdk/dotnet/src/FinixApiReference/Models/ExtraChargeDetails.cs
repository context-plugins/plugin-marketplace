using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Additional charges billed beyond the room rate. Each field represents a specific charge type, in cents.
/// </summary>
public record ExtraChargeDetails
{
    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("restaurant_amount")]
    public int? RestaurantAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mini_bar_amount")]
    public int? MiniBarAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("laundry_amount")]
    public int? LaundryAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("other_amount")]
    public int? OtherAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone_amount")]
    public int? PhoneAmount { get; init; }

    /// <summary>
    /// The amount of the additional charge, in cents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gift_shop_amount")]
    public int? GiftShopAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
