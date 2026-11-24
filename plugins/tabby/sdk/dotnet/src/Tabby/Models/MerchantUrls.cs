using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Core.Validation;
using Tabby.Core.Validation.Attributes;

namespace Tabby.Models;

/// <summary>
/// Used for redirecting the customer after Tabby Checkout flow. Required for Web integration, optional for Mobile App integration.
/// </summary>
public record MerchantUrls
{
    /// <summary>
    /// URL to redirect the customer to merchant's 'Thank you' page after success payment. Payment status = <c>AUTHORIZED</c> or <c>CLOSED</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success")]
    [Format(FormatKind.Uri)]
    public string? Success { get; init; }

    /// <summary>
    /// URL to redirect the customer back to merchant's Checkout page after payment cancellation by customer. Payment status = <c>EXPIRED</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancel")]
    [Format(FormatKind.Uri)]
    public string? Cancel { get; init; }

    /// <summary>
    /// URL to redirect the customer back to merchant's Checkout page after payment rejection by Tabby. Payment status = <c>REJECTED</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure")]
    [Format(FormatKind.Uri)]
    public string? Failure { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
