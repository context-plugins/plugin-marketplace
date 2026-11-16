using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Details of the recipient of the payout.
/// </summary>
public record RecipientDetails2
{
    /// <summary>
    /// The primary address for the legal entity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_address")]
    public BusinessAddress5? BusinessAddress { get; init; }

    /// <summary>
    /// Abbreviated names of the business. If there are no abbreviated name, leave this field blank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_name")]
    [MinLength(1)]
    public string? BusinessName { get; init; }

    /// <summary>
    /// Alternate names of the business. If there are no other names, pass the same value used for <c>business_name</c> (max 60 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doing_business_as")]
    [MinLength(1)]
    public string? DoingBusinessAs { get; init; }

    /// <summary>
    /// The email address of the principal control owner (max 100 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [MinLength(1)]
    public string? Email { get; init; }

    /// <summary>
    /// The legal first name of the control owner (max 20 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_name")]
    [MinLength(1)]
    public string? FirstName { get; init; }

    /// <summary>
    /// The <c>Identity</c> owner's legal last name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_name")]
    [MinLength(1)]
    public string? LastName { get; init; }

    /// <summary>
    /// The home address of the principal control owner. This field is used for identity verification purposes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personal_address")]
    public PersonalAddress2? PersonalAddress { get; init; }

    /// <summary>
    /// Whether a personal tax ID was provided by the recipient.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personal_tax_id_provided")]
    public bool? PersonalTaxIdProvided { get; init; }

    /// <summary>
    /// Whether a business tax ID was provided by the recipient.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_tax_id_provided")]
    public bool? BusinessTaxIdProvided { get; init; }

    /// <summary>
    /// The principal control owner's phone number (max 10 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    [MinLength(1)]
    public string? Phone { get; init; }

    /// <summary>
    /// Whether the recipient is considered "PERSONAL" or a "BUSINESS".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type39? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
