namespace Leadspace.Requests.Results;

/// <summary>
/// The inputs of the GetDiscoveryResults operation.
/// </summary>
public sealed record GetDiscoveryResultsRequest
{
    /// <summary>
    /// The Leadspace bulk identifier returned when the job was accepted
    /// </summary>
    public required string BulkId { get; init; }
}
