using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Identifying information about the recipient business.
/// </summary>
public record Entity3
{
    /// <summary>
    /// The primary address for the legal entity.
    /// </summary>
    [JsonPropertyName("business_address")]
    public required Address BusinessAddress { get; init; }

    /// <summary>
    /// The legal business name (max 120 characters). For an <c>INDIVIDUAL_SOLE_PROPRIETORSHIP</c>, pass the owner's legal first name, last name, and middle initial.
    /// </summary>
    [JsonPropertyName("business_name")]
    [MinLength(1)]
    public required string? BusinessName { get; init; }

    /// <summary>
    /// Alternate names of the business. If there are no other names, pass the same value used for <c>business_name</c> (max 60 characters).
    /// </summary>
    [JsonPropertyName("doing_business_as")]
    [MinLength(1)]
    public required string? DoingBusinessAs { get; init; }

    /// <summary>
    /// The legal first name of the recipient business's control owner (max 20 characters).
    /// </summary>
    [JsonPropertyName("first_name")]
    [MinLength(1)]
    public required string? FirstName { get; init; }

    /// <summary>
    /// The legal last name of the recipient business's control owner (max 20 characters).
    /// </summary>
    [JsonPropertyName("last_name")]
    [MinLength(1)]
    public required string? LastName { get; init; }

    /// <summary>
    /// The billing address of the recipient business's control owner.
    /// </summary>
    [JsonPropertyName("personal_address")]
    public required Address PersonalAddress { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
