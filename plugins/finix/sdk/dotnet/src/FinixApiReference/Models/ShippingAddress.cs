using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Shipping or mailing address of the buyer.
/// </summary>
public record ShippingAddress
{
    /// <summary>
    /// City.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    [StringLength(20, MinimumLength = 1)]
    public string? City { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public Country? Country { get; init; }

    /// <summary>
    /// The first line of the address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line1")]
    [StringLength(35, MinimumLength = 1)]
    public string? Line1 { get; init; }

    /// <summary>
    /// The second line of the address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line2")]
    [StringLength(35, MinimumLength = 1)]
    public string? Line2 { get; init; }

    /// <summary>
    /// The zip or postal code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postal_code")]
    [StringLength(7, MinimumLength = 1)]
    public string? PostalCode { get; init; }

    /// <summary>
    /// 2-letter state code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    [MinLength(1)]
    public string? Region { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
