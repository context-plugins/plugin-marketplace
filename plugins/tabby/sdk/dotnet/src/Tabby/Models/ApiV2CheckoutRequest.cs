using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Models.Enums;

namespace Tabby.Models;

public record ApiV2CheckoutRequest
{
    /// <summary>
    /// Payment object associated with the current session.
    /// </summary>
    [JsonPropertyName("payment")]
    public required CheckoutCreation Payment { get; init; }

    /// <summary>
    /// Session language, used to launch HPP with desired language.
    /// </summary>
    [JsonPropertyName("lang")]
    public required LanguageCode Lang { get; init; }

    /// <summary>
    /// Please contact your integration manager to get the merchant code.
    /// </summary>
    [JsonPropertyName("merchant_code")]
    public required string MerchantCode { get; init; }

    /// <summary>
    /// Used for redirecting the customer after Tabby Checkout flow. Required for Web integration, optional for Mobile App integration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_urls")]
    public MerchantUrls? MerchantUrls { get; init; }

    /// <summary>
    /// If you already have <c>token</c>, you can pass it there. Authorization header still requires Secret Key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("token")]
    public string? Token { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
