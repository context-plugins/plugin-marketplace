using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Emoji reaction on a comment.
/// </summary>
public record StoryReaction
{
    /// <summary>
    /// Emoji text of the reaction.
    /// </summary>
    [JsonPropertyName("emoji")]
    public required string Emoji { get; init; }

    /// <summary>
    /// Permissions who have reacted with this.
    /// </summary>
    [JsonPropertyName("permission_ids")]
    public required IReadOnlyList<Guid> PermissionIds { get; init; }
}
