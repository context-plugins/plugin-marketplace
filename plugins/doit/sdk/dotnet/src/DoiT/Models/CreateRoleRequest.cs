using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// Request body to create a custom role.
/// </summary>
public record CreateRoleRequest
{
    /// <summary>
    /// The name of the role. Must be nonblank, contain no leading or trailing whitespace, and be unique among the customer's roles, including preset roles.
    /// </summary>
    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    /// <summary>
    /// The description of the role.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Permission IDs to assign to the role, as returned in <c>permissions</c> by <c>GET /iam/v1/roles</c>. Duplicate IDs are rejected. Input order is preserved. Omission or an empty array creates a role without permissions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("permissions")]
    [UniqueItems]
    public IReadOnlyList<string>? Permissions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
