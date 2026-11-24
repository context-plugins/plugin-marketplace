using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Fields allowed when updating an existing user.
/// </summary>
public record UpdateUserRequest
{
    /// <summary>
    /// The user's first name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    public string? FirstName { get; init; }

    /// <summary>
    /// The user's last name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    public string? LastName { get; init; }

    /// <summary>
    /// The user's job function.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTitle")]
    public JobTitle? JobTitle { get; init; }

    /// <summary>
    /// Deprecated: use 'jobTitle' instead. If both are provided, 'jobTitle' takes precedence.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobFunction")]
    public JobFunction? JobFunction { get; init; }

    /// <summary>
    /// The user's country code (e.g., +44).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    [RegularExpression("^\\+[0-9]+$")]
    public string? Phone { get; init; }

    /// <summary>
    /// The user's phone extension (8-15 digits).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneExtension")]
    [RegularExpression("^[0-9]{8,15}$")]
    public string? PhoneExtension { get; init; }

    /// <summary>
    /// The user's preferred language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public Language? Language { get; init; }

    /// <summary>
    /// The ID of the role to assign to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleId")]
    public string? RoleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
