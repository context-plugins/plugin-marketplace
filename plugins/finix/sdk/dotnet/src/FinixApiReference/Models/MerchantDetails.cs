using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing <c>Merchant</c> details.
/// </summary>
public record MerchantDetails
{
    /// <summary>
    /// The ID of the <c>Merchant</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The merchant's legal business name. For a sole proprietorship, pass the owner's legal first name, last name, and middle initial.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_name")]
    [StringLength(120, MinimumLength = 1)]
    public string? BusinessName { get; init; }

    /// <summary>
    /// Alternate names of the business. If there are no other names, pass the same value used for <c>business_name</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doing_business_as")]
    [StringLength(60, MinimumLength = 1)]
    public string? DoingBusinessAs { get; init; }

    /// <summary>
    /// The primary address for the legal entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_address")]
    public BusinessAddress3? BusinessAddress { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
