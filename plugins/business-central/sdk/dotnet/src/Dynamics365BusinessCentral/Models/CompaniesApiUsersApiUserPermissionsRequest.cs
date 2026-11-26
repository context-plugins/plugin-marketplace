using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Models;

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
