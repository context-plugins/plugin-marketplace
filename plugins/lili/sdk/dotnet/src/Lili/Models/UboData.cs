using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lili.Core.Models;
using Lili.Core.Validation;
using Lili.Core.Validation.Attributes;
using Lili.Models.Enums;

namespace Lili.Models;

public record UboData
{
    /// <summary>
    /// The unique ID of the webhook
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Customer phone number. E.164 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneNumber")]
    public string? PhoneNumber { get; init; }

    /// <summary>
    /// Customer SSN
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ssn")]
    [RegularExpression("^(?!666|000|9\\d{2})\\d{3}-\\d{2}-(?!0{4})\\d{4}$|^(?!666|000|9\\d{2})\\d{3}\\d{2}(?!0{4})\\d{4}$")]
    public string? Ssn { get; init; }

    /// <summary>
    /// Customer birth date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("birthDate")]
    public DateTimeOffset? BirthDate { get; init; }

    /// <summary>
    /// Customer first name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    public string? FirstName { get; init; }

    /// <summary>
    /// Customer last name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    public string? LastName { get; init; }

    /// <summary>
    /// Passport number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("passportNumber")]
    public string? PassportNumber { get; init; }

    /// <summary>
    /// Non US customer National ID number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idGovNumber")]
    public string? IdGovNumber { get; init; }

    /// <summary>
    /// National ID country (Alpha 2, ISO 3166 format).
    /// Note that if a passport number is supplied, this is the passport issuance country
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idCountry")]
    public string? IdCountry { get; init; }

    /// <summary>
    /// National ID expiration date. Note that if passport number is supplied, this is the passport expiration date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idExpirationDate")]
    public string? IdExpirationDate { get; init; }

    /// <summary>
    /// The UBO role in the account
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("role")]
    public Role? Role { get; init; }

    /// <summary>
    /// The ownership percentage of the UBO
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownershipPercent")]
    [Minimum(25.0)]
    [Maximum(100.0)]
    public double? OwnershipPercent { get; init; }

    /// <summary>
    /// The UBO address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public AddressData5? Address { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
