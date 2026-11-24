using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application.
/// </summary>
public record Icon
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The unique ID of the Icon.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The time/date that the Icon was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The time/date that the Icon was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The URL of the Icon.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }
}
