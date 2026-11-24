using System;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// Repository refers to a VCS repository.
/// </summary>
public record Repository
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The shorthand name of the VCS repository.
    /// </summary>
    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    /// <summary>
    /// The VCS provider for the Repository.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeShortcutRepositoriesApi Type { get; init; }

    /// <summary>
    /// The time/date the Repository was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The VCS unique identifier for the Repository.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The ID associated to the VCS repository in Shortcut.
    /// </summary>
    [JsonPropertyName("id")]
    public required long? Id { get; init; }

    /// <summary>
    /// The URL of the Repository.
    /// </summary>
    [JsonPropertyName("url")]
    public required string? Url { get; init; }

    /// <summary>
    /// The full name of the VCS repository.
    /// </summary>
    [JsonPropertyName("full_name")]
    public required string? FullName { get; init; }

    /// <summary>
    /// The time/date the Repository was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset? CreatedAt { get; init; }
}
