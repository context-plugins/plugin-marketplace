using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Update a user (last name updated)
/// </summary>
public record OrganizationUserUpdateRequestDto
{
    /// <summary>
    /// User first name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstName")]
    [MaxLength(100)]
    public string? FirstName { get; init; }

    /// <summary>
    /// User last name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastName")]
    [MaxLength(100)]
    public string? LastName { get; init; }

    /// <summary>
    /// BILL-generated ID of the user role. The value begins with <c>0po</c>.
    /// <para>
    /// If you do not set <c>roleId</c>, the default <c>ADMINISTRATOR</c> user role is assigned to the created user. You can get the list of available user roles with <c>GET /v3/roles</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleId")]
    public string? RoleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
