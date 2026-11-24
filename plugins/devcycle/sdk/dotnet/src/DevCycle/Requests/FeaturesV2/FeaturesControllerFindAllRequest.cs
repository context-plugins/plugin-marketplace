using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using DevCycle.Core.Validation.Attributes;
using DevCycle.Models.Enums;

namespace DevCycle.Requests.FeaturesV2;

/// <summary>
/// The inputs of the FeaturesControllerFindAll operation.
/// </summary>
public sealed record FeaturesControllerFindAllRequest
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    [Minimum(1.0)]
    public double Page { get; init; } = 1d;

    [Minimum(1.0)]
    [Maximum(1000.0)]
    public double PerPage { get; init; } = 100d;

    public SortBy SortBy { get; init; } = SortBy.CreatedAt;

    public SortOrder SortOrder { get; init; } = SortOrder.Desc;

    [MinLength(3)]
    public string? Search { get; init; }

    public string? CreatedBy { get; init; }

    public Type9? Type { get; init; }

    public Status5? Status { get; init; }

    public IReadOnlyList<string>? CustomStatus { get; init; }

    public IReadOnlyList<string>? Keys { get; init; }

    public bool? IncludeLatestUpdate { get; init; }

    public Staleness? Staleness { get; init; }
}
