namespace CircleCi.Requests.RunnerTask;

/// <summary>
/// The inputs of the GetUnclaimedTaskCount operation.
/// </summary>
public sealed record GetUnclaimedTaskCountRequest
{
    /// <summary>
    /// The resource class to query unclaimed tasks for
    /// </summary>
    public required string ResourceClass { get; init; }
}
