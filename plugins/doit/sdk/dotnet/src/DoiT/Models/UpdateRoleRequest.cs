using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// Fields allowed when updating a custom role. At least one field is required.
/// </summary>
public record UpdateRoleRequest
{
    /// <summary>
    /// The new name of the role. Must be nonblank, contain no leading or trailing whitespace, and be unique among the customer's roles, including preset roles. Omission leaves the name unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MinLength(1)]
    public string? Name { get; init; }

    /// <summary>
    /// The new description of the role. An empty string clears it; omission leaves it unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Permission IDs that replace the role's current permissions, as returned in <c>permissions</c> by <c>GET /iam/v1/roles</c>. Duplicate IDs are rejected. Input order is preserved. An empty array clears all permissions; omission leaves them unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("permissions")]
    [UniqueItems]
    public IReadOnlyList<string>? Permissions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
