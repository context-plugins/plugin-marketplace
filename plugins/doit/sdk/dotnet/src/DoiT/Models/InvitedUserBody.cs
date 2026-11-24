using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record InvitedUserBody
{
    /// <summary>
    /// The unique ID of the invited user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The email address of the invited user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// The first name of the invited user, if provided during invitation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    public string? FirstName { get; init; }

    /// <summary>
    /// The last name of the invited user, if provided during invitation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    public string? LastName { get; init; }

    /// <summary>
    /// The display name of the invited user, if provided during invitation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The job function of the invited user, if provided during invitation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTitle")]
    public string? JobTitle { get; init; }

    /// <summary>
    /// The ID of the role assigned to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleId")]
    public string? RoleId { get; init; }

    /// <summary>
    /// The ID of the organization assigned to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizationId")]
    public string? OrganizationId { get; init; }

    /// <summary>
    /// The status of the user (invited)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1DoiTUsersApi? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
