using System;

namespace MicrosoftDynamicsNav.Requests.ScheduledJobs;

/// <summary>
/// The inputs of the ListScheduledJobs operation.
/// </summary>
public sealed record ListScheduledJobsRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
