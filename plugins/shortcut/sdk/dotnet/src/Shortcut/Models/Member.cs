using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// Details about an individual user within the Workspace.
/// </summary>
public record Member
{
    /// <summary>
    /// The Member's role in the Workspace.
    /// </summary>
    [JsonPropertyName("role")]
    public required string Role { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// True/false boolean indicating whether the Member has been disabled within the Workspace.
    /// </summary>
    [JsonPropertyName("disabled")]
    public required bool Disabled { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// The user state, one of partial, full, disabled, or imported.  A partial user is disabled, has no means to log in, and is not an import user.  A full user is enabled and has a means to log in.  A disabled user is disabled and has a means to log in.  An import user is disabled, has no means to log in, and is marked as an import user.
    /// </summary>
    [JsonPropertyName("state")]
    public required StateShortcutMembersApi State { get; init; }

    /// <summary>
    /// The time/date the Member was last updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Whether this member was created as a placeholder entity.
    /// </summary>
    [JsonPropertyName("created_without_invite")]
    public required bool CreatedWithoutInvite { get; init; }

    /// <summary>
    /// The Member's group ids
    /// </summary>
    [JsonPropertyName("group_ids")]
    public required IReadOnlyList<Guid> GroupIds { get; init; }

    /// <summary>
    /// The Member's ID in Shortcut.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Only set for agents. The installation id associated with this agent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("installation_id")]
    public Guid? InstallationId { get; init; }

    /// <summary>
    /// A group of Member profile details.
    /// </summary>
    [JsonPropertyName("profile")]
    public required Profile Profile { get; init; }

    /// <summary>
    /// The time/date the Member was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// The id of the member that replaces this one when merged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replaced_by")]
    public Guid? ReplacedBy { get; init; }
}
