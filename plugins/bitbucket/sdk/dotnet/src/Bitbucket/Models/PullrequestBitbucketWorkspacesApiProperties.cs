using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Core.Validation.Attributes;
using Bitbucket.Models.AllOf;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record PullrequestBitbucketWorkspacesApiProperties
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public Links3BitbucketPullrequestsApi? Links { get; init; }

    /// <summary>
    /// The pull request's unique ID. Note that pull request IDs are only unique within their associated repository.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Title of the pull request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// User provided pull request text, interpreted in a markup language and rendered in HTML
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rendered")]
    public RenderedPullRequestMarkup? Rendered { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public Summary? Summary { get; init; }

    /// <summary>
    /// The pull request's current status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State1BitbucketPullrequestsApi? State { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author")]
    public Account? Author { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public PullRequestEndpointBitbucketWorkspacesApi? Source { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination")]
    public PullRequestEndpointBitbucketWorkspacesApi? Destination { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merge_commit")]
    public PullRequestCommit? MergeCommit { get; init; }

    /// <summary>
    /// The number of comments for a specific pull request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comment_count")]
    [Minimum(0)]
    public int? CommentCount { get; init; }

    /// <summary>
    /// The number of open tasks for a specific pull request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task_count")]
    [Minimum(0)]
    public int? TaskCount { get; init; }

    /// <summary>
    /// A boolean flag indicating if merging the pull request closes the source branch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_source_branch")]
    public bool? CloseSourceBranch { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closed_by")]
    public Account? ClosedBy { get; init; }

    /// <summary>
    /// Explains why a pull request was declined. This field is only applicable to pull requests in rejected state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// The ISO8601 timestamp the request was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_on")]
    public DateTimeOffset? CreatedOn { get; init; }

    /// <summary>
    /// The ISO8601 timestamp the request was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_on")]
    public DateTimeOffset? UpdatedOn { get; init; }

    /// <summary>
    /// The list of users that were added as reviewers on this pull request when it was created. For performance reasons, the API only includes this list on a pull request's <c>self</c> URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reviewers")]
    public IReadOnlyList<Account>? Reviewers { get; init; }

    /// <summary>
    /// The list of users that are collaborating on this pull request.
    ///         Collaborators are user that:
    /// <para>
    ///         * are added to the pull request as a reviewer (part of the reviewers
    ///           list)
    ///         * are not explicit reviewers, but have commented on the pull request
    ///         * are not explicit reviewers, but have approved the pull request
    /// </para>
    /// <para>
    ///         Each user is wrapped in an object that indicates the user's role and
    ///         whether they have approved the pull request. For performance reasons,
    ///         the API only returns this list when an API requests a pull request by
    ///         id.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("participants")]
    public IReadOnlyList<Participant>? Participants { get; init; }

    /// <summary>
    /// A boolean flag indicating whether the pull request is a draft.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("draft")]
    public bool? Draft { get; init; }

    /// <summary>
    /// A boolean flag indicating whether the pull request is queued
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queued")]
    public bool? Queued { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
