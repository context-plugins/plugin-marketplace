using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the JobSummaryV2JobsJobIdSummaryGet operation.
/// </summary>
public sealed record JobSummaryV2JobsJobIdSummaryGetRequest
{
    public required Guid JobId { get; init; }
}
