using System;
using Bitbucket.Core.Validation.Attributes;
using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.Pipelines;

/// <summary>
/// The inputs of the GetPipelinesForRepository operation.
/// </summary>
public sealed record GetPipelinesForRepositoryRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The UUID of the creator of the pipeline to filter by.
    /// </summary>
    public Guid? CreatorUuid { get; init; }

    /// <summary>
    /// The type of the reference to filter by.
    /// </summary>
    public TargetRefType? TargetRefType { get; init; }

    /// <summary>
    /// The reference name to filter by.
    /// </summary>
    public string? TargetRefName { get; init; }

    /// <summary>
    /// The name of the branch to filter by.
    /// </summary>
    public string? TargetBranch { get; init; }

    /// <summary>
    /// The revision to filter by.
    /// </summary>
    public string? TargetCommitHash { get; init; }

    /// <summary>
    /// The pipeline pattern to filter by.
    /// </summary>
    public string? TargetSelectorPattern { get; init; }

    /// <summary>
    /// The type of pipeline to filter by.
    /// </summary>
    public TargetSelectorType? TargetSelectorType { get; init; }

    /// <summary>
    /// The creation date to filter by.
    /// </summary>
    public DateTimeOffset? CreatedOn { get; init; }

    /// <summary>
    /// The trigger type to filter by.
    /// </summary>
    public TriggerType? TriggerType { get; init; }

    /// <summary>
    /// The pipeline status to filter by.
    /// </summary>
    public Status1? Status { get; init; }

    /// <summary>
    /// The attribute name to sort on.
    /// </summary>
    public Sort? Sort { get; init; }

    /// <summary>
    /// The page number of elements to retrieve.
    /// </summary>
    [Minimum(1)]
    public int Page { get; init; } = 1;

    /// <summary>
    /// The maximum number of results to return.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Pagelen { get; init; } = 10;
}
