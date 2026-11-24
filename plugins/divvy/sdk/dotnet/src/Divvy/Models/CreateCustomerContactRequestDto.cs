using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Core.Validation;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Models;

/// <summary>
/// Create a customer contact
/// </summary>
public record CreateCustomerContactRequestDto
{
    /// <summary>
    /// Customer first name
    /// </summary>
    [JsonPropertyName("firstName")]
    [StringLength(100, MinimumLength = 1)]
    public required string FirstName { get; init; }

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
    [JsonPropertyName("email")]
    [MinLength(1)]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

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
