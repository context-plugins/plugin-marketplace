namespace CircleCi.Requests.RunnerTask;

/// <summary>
/// The inputs of the GetRunningTaskCount operation.
/// </summary>
public sealed record GetRunningTaskCountRequest
{
    /// <summary>
    /// The resource class to query running tasks for
    /// </summary>
    public required string ResourceClass { get; init; }
}
