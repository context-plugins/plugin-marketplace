using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Definition and permissions assigned to a role.
/// </summary>
public record RoleDoiTRolesApi
{
    /// <summary>
    /// The unique ID of the role.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the role.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The type of the role (preset or custom).
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeDoiTRolesApi Type { get; init; }

    /// <summary>
    /// The description of the role. An empty string when no description is set.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// The customer ID if this is a custom role. An empty string for a preset role.
    /// </summary>
    [JsonPropertyName("customer")]
    public required string Customer { get; init; }

    /// <summary>
    /// Permission IDs in stored order. An empty array when no permissions are assigned.
    /// </summary>
    [JsonPropertyName("permissions")]
    public required IReadOnlyList<string> Permissions { get; init; }

    /// <summary>
    /// Whether the owning tenant made this role available as a child tenant role.
    /// </summary>
    [JsonPropertyName("childTenantEligible")]
    public required bool ChildTenantEligible { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
