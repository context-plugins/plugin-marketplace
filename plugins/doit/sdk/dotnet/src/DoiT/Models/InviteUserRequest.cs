using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Request body to invite a new user to the organization.
/// </summary>
public record InviteUserRequest
{
    /// <summary>
    /// The email address of the user.
    /// </summary>
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// The first name of the user being invited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    public string? FirstName { get; init; }

    /// <summary>
    /// The last name of the user being invited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    public string? LastName { get; init; }

    /// <summary>
    /// The job function of the user being invited.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTitle")]
    public JobTitle2? JobTitle { get; init; }

    /// <summary>
    /// The ID of the role to assign to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleId")]
    public string? RoleId { get; init; }

    /// <summary>
    /// The ID of the organization to assign the user to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizationId")]
    public string? OrganizationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
