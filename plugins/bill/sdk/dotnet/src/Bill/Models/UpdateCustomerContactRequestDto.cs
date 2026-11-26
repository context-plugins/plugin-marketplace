using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Core.Validation;
using Bill.Core.Validation.Attributes;

namespace Bill.Models;

/// <summary>
/// Update a customer contact
/// </summary>
public record UpdateCustomerContactRequestDto
{
    /// <summary>
    /// Customer first name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    [MaxLength(100)]
    public string? FirstName { get; init; }

    /// <summary>
    /// Customer last name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    [MaxLength(100)]
    public string? LastName { get; init; }

    /// <summary>
    /// Customer email address. The value must be unique in the organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    /// <summary>
    /// Customer phone number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    [MaxLength(40)]
    public string? Phone { get; init; }

    /// <summary>
    /// Customer alternate phone number. Use this field to sync with your accounting system.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("altPhone")]
    [MaxLength(40)]
    public string? AltPhone { get; init; }

    /// <summary>
    /// Customer alternate email address. The customer cannot use this email address to sign in to the BILL web app.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternateEmail")]
    [Format(FormatKind.Email)]
    public string? AlternateEmail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
