using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Models;

public record CompaniesApiUsersApiUserPermissionsRequest
{
    /// <summary>
    /// The permission set role ID
    /// </summary>
    [JsonPropertyName("roleId")]
    public required string RoleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
