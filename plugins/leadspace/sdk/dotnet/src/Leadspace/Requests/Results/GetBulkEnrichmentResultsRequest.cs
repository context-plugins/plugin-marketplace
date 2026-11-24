namespace Leadspace.Requests.Results;

/// <summary>
/// The inputs of the GetBulkEnrichmentResults operation.
/// </summary>
public sealed record GetBulkEnrichmentResultsRequest
{
    /// <summary>
    /// The Leadspace bulk identifier returned when the job was accepted
    /// </summary>
    public required string BulkId { get; init; }
}
