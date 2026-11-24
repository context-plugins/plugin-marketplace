using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Create a user
/// </summary>
public record CreateUserRequestDto
{
    /// <summary>
    /// User first name
    /// </summary>
    [JsonPropertyName("firstName")]
    [MinLength(1)]
    public required string FirstName { get; init; }

    /// <summary>
    /// User last name
    /// </summary>
    [JsonPropertyName("lastName")]
    [MinLength(1)]
    public required string LastName { get; init; }

    /// <summary>
    /// User email address
    /// </summary>
    [JsonPropertyName("email")]
    [MinLength(1)]
    public required string Email { get; init; }

    [JsonPropertyName("role")]
    public required InputRoleType Role { get; init; }

    /// <summary>
    /// User date of birth. The value is in the <c>yyyy-MM-dd</c> format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dateOfBirth")]
    public DateTimeOffset? DateOfBirth { get; init; }

    /// <summary>
    /// User phone number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneNumber")]
    public string? PhoneNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
