namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Crongenerator operation.
/// </summary>
public sealed record CrongeneratorRequest
{
    /// <summary>
    /// Natural language description of the schedule (max 200 characters)
    /// </summary>
    public required string Schedule { get; init; }
}
