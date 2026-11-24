namespace MrScraper.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobsById operation.
/// </summary>
public sealed record GetJobsByIdRequest
{
    /// <summary>
    /// Job ID
    /// </summary>
    public required int Id { get; init; }
}
