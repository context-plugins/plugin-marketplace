using System;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Sellers' details within marketplaces.
/// </summary>
public record Marketplaces
{
    /// <summary>
    /// Unique ID of the seller within your marketplace.
    /// </summary>
    [JsonPropertyName("seller_id")]
    public required string SellerId { get; init; }

    /// <summary>
    /// Name of the seller within your marketplace.
    /// </summary>
    [JsonPropertyName("seller_name")]
    public required string SellerName { get; init; }

    /// <summary>
    /// Category of the seller within your marketplace.
    /// </summary>
    [JsonPropertyName("seller_category")]
    public required string SellerCategory { get; init; }

    /// <summary>
    /// Website of the seller within your marketplace.
    /// </summary>
    [JsonPropertyName("seller_website")]
    public required string SellerWebsite { get; init; }

    /// <summary>
    /// Seller's phone number.
    /// </summary>
    [JsonPropertyName("seller_phone")]
    public required string SellerPhone { get; init; }

    /// <summary>
    /// Seller's registration date, in UTC, and displayed in ISO 8601 datetime format.
    /// </summary>
    [JsonPropertyName("seller_registration_date")]
    public required DateTimeOffset SellerRegistrationDate { get; init; }

    /// <summary>
    /// Seller's commercial registration number.
    /// </summary>
    [JsonPropertyName("seller_commercial_registration_number")]
    public required string SellerCommercialRegistrationNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
