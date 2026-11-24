namespace Leadspace.Requests.Results;

/// <summary>
/// The inputs of the GetIntentResults operation.
/// </summary>
public sealed record GetIntentResultsRequest
{
    /// <summary>
    /// The Leadspace bulk identifier returned when the job was accepted
    /// </summary>
    public required string JobId { get; init; }
}
