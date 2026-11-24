using System;
using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Core.Validation.Attributes;

namespace Tabby.Models;

/// <summary>
/// Customer information. <c>registered_since</c> (as a date of the customer's registration in the App), <c>loyalty_level</c> (as a number of successful orders) and <c>wishlist_count</c> (paid amount by a customer previously, e.g. 500) must be sent for Monthly Billing. <c>is_social_networks_connected</c> is also required for Monthly Billing.
/// </summary>
public record BuyerHistoryResponse
{
    /// <summary>
    /// Date and time the customer got registred with you, in UTC, and displayed in ISO 8601 datetime format.
    /// </summary>
    [JsonPropertyName("registered_since")]
    public required DateTimeOffset RegisteredSince { get; init; }

    /// <summary>
    /// Customer's loyalty level within your store, should be sent as a number of successfully placed orders in the store with any payment methods.
    /// </summary>
    [JsonPropertyName("loyalty_level")]
    public double LoyaltyLevel { get; init; } = 0d;

    /// <summary>
    /// Number of items in Customer's wishlist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wishlist_count")]
    [Minimum(0.0)]
    public double? WishlistCount { get; init; } = 0d;

    /// <summary>
    /// Is social network connected
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_social_networks_connected")]
    public bool? IsSocialNetworksConnected { get; init; }

    /// <summary>
    /// Is phone number verified
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_phone_number_verified")]
    public bool? IsPhoneNumberVerified { get; init; }

    /// <summary>
    /// Is email verified
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_email_verified")]
    public bool? IsEmailVerified { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
