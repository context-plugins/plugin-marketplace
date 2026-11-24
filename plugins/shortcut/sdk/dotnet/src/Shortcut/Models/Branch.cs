using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Branch refers to a VCS branch. Branches are feature branches associated with Shortcut Stories.
/// </summary>
public record Branch
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Branch has been deleted.
    /// </summary>
    [JsonPropertyName("deleted")]
    public required bool Deleted { get; init; }

    /// <summary>
    /// The name of the Branch.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// This field is deprecated, and will always be false.
    /// </summary>
    [JsonPropertyName("persistent")]
    public required bool Persistent { get; init; }

    /// <summary>
    /// The time/date the Branch was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// An array of PullRequests attached to the Branch (there is usually only one).
    /// </summary>
    [JsonPropertyName("pull_requests")]
    public required IReadOnlyList<PullRequest> PullRequests { get; init; }

    /// <summary>
    /// The IDs of the Branches the Branch has been merged into.
    /// </summary>
    [JsonPropertyName("merged_branch_ids")]
    public required IReadOnlyList<long> MergedBranchIds { get; init; }

    /// <summary>
    /// The unique ID of the Branch.
    /// </summary>
    [JsonPropertyName("id")]
    public required long? Id { get; init; }

    /// <summary>
    /// The URL of the Branch.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The ID of the Repository that contains the Branch.
    /// </summary>
    [JsonPropertyName("repository_id")]
    public required long RepositoryId { get; init; }

    /// <summary>
    /// The time/date the Branch was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset? CreatedAt { get; init; }
}
