using MrScraper.Models;

namespace MrScraper.Requests.Jobs;

/// <summary>
/// The inputs of the PutJobsById operation.
/// </summary>
public sealed record PutJobsByIdRequest
{
    /// <summary>
    /// Job ID
    /// </summary>
    public required int Id { get; init; }

    /// <summary>
    /// Job object
    /// </summary>
    public required JobJob Body { get; init; }
}
