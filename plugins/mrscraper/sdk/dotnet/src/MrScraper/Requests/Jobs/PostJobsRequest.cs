using MrScraper.Models;

namespace MrScraper.Requests.Jobs;

/// <summary>
/// The inputs of the PostJobs operation.
/// </summary>
public sealed record PostJobsRequest
{
    /// <summary>
    /// Job object (ID will be auto-generated, do not include)
    /// </summary>
    public required JobJob Body { get; init; }
}
