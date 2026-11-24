using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Corresponds to a VCS Pull Request attached to a Shortcut story.
/// </summary>
public record PullRequest
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// True/False boolean indicating whether the VCS pull request has been closed.
    /// </summary>
    [JsonPropertyName("closed")]
    public required bool Closed { get; init; }

    /// <summary>
    /// True/False boolean indicating whether the VCS pull request has been merged.
    /// </summary>
    [JsonPropertyName("merged")]
    public required bool Merged { get; init; }

    /// <summary>
    /// Number of lines added in the pull request, according to VCS.
    /// </summary>
    [JsonPropertyName("num_added")]
    public required long NumAdded { get; init; }

    /// <summary>
    /// The ID of the branch for the particular pull request.
    /// </summary>
    [JsonPropertyName("branch_id")]
    public required long BranchId { get; init; }

    /// <summary>
    /// An array of Story ids that have Pull Requests that change at least one of the same lines this Pull Request changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overlapping_stories")]
    public IReadOnlyList<long>? OverlappingStories { get; init; }

    /// <summary>
    /// The pull request's unique number ID in VCS.
    /// </summary>
    [JsonPropertyName("number")]
    public required long Number { get; init; }

    /// <summary>
    /// The name of the branch for the particular pull request.
    /// </summary>
    [JsonPropertyName("branch_name")]
    public required string BranchName { get; init; }

    /// <summary>
    /// The name of the target branch for the particular pull request.
    /// </summary>
    [JsonPropertyName("target_branch_name")]
    public required string TargetBranchName { get; init; }

    /// <summary>
    /// The number of commits on the pull request.
    /// </summary>
    [JsonPropertyName("num_commits")]
    public required long? NumCommits { get; init; }

    /// <summary>
    /// The title of the pull request.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// The time/date the pull request was created.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Boolean indicating that the Pull Request has Stories that have Pull Requests that change at least one of the same lines this Pull Request changes.
    /// </summary>
    [JsonPropertyName("has_overlapping_stories")]
    public required bool HasOverlappingStories { get; init; }

    /// <summary>
    /// True/False boolean indicating whether the VCS pull request is in the draft state.
    /// </summary>
    [JsonPropertyName("draft")]
    public required bool Draft { get; init; }

    /// <summary>
    /// The unique ID associated with the pull request in Shortcut.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// An array of PullRequestLabels attached to the PullRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcs_labels")]
    public IReadOnlyList<PullRequestLabel>? VcsLabels { get; init; }

    /// <summary>
    /// The URL for the pull request.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Number of lines removed in the pull request, according to VCS.
    /// </summary>
    [JsonPropertyName("num_removed")]
    public required long NumRemoved { get; init; }

    /// <summary>
    /// The status of the review for the pull request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("review_status")]
    public string? ReviewStatus { get; init; }

    /// <summary>
    /// Number of lines modified in the pull request, according to VCS.
    /// </summary>
    [JsonPropertyName("num_modified")]
    public required long? NumModified { get; init; }

    /// <summary>
    /// The status of the Continuous Integration workflow for the pull request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_status")]
    public string? BuildStatus { get; init; }

    /// <summary>
    /// The ID of the target branch for the particular pull request.
    /// </summary>
    [JsonPropertyName("target_branch_id")]
    public required long TargetBranchId { get; init; }

    /// <summary>
    /// The ID of the repository for the particular pull request.
    /// </summary>
    [JsonPropertyName("repository_id")]
    public required long RepositoryId { get; init; }

    /// <summary>
    /// The time/date the pull request was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
