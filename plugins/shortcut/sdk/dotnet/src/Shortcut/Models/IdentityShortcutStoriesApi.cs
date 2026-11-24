using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// The Identity of the VCS user that authored the Commit.
/// </summary>
public record IdentityShortcutStoriesApi
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// This is your login in VCS.
    /// </summary>
    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    /// <summary>
    /// The service this Identity is for.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1? Type { get; init; }
}
