using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Commit refers to a VCS commit and all associated details.
/// </summary>
public record Commit
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The ID of the Member that authored the Commit, if known.
    /// </summary>
    [JsonPropertyName("author_id")]
    public required Guid? AuthorId { get; init; }

    /// <summary>
    /// The Commit hash.
    /// </summary>
    [JsonPropertyName("hash")]
    public required string Hash { get; init; }

    /// <summary>
    /// The time/date the Commit was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The unique ID of the Commit.
    /// </summary>
    [JsonPropertyName("id")]
    public required long? Id { get; init; }

    /// <summary>
    /// The URL of the Commit.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The email address of the VCS user that authored the Commit.
    /// </summary>
    [JsonPropertyName("author_email")]
    public required string AuthorEmail { get; init; }

    /// <summary>
    /// The time/date the Commit was pushed.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// The Identity of the VCS user that authored the Commit.
    /// </summary>
    [JsonPropertyName("author_identity")]
    public required Identity AuthorIdentity { get; init; }

    /// <summary>
    /// The ID of the Repository that contains the Commit.
    /// </summary>
    [JsonPropertyName("repository_id")]
    public required long? RepositoryId { get; init; }

    /// <summary>
    /// The time/date the Commit was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The Commit message.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }
}
