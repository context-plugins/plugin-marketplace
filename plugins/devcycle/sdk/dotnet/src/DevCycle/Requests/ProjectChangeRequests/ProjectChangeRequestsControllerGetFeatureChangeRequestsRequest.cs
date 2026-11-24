using System.ComponentModel.DataAnnotations;
using DevCycle.Core.Validation.Attributes;
using DevCycle.Models.Enums;

namespace DevCycle.Requests.ProjectChangeRequests;

/// <summary>
/// The inputs of the ProjectChangeRequestsControllerGetFeatureChangeRequests operation.
/// </summary>
public sealed record ProjectChangeRequestsControllerGetFeatureChangeRequestsRequest
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

    public Status1DevCycleManagementProjectChangeRequestsApi? Status { get; init; }

    public string? Reviewer { get; init; }
}
