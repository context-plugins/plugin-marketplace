namespace ApiVerve.Requests.Games;

/// <summary>
/// The inputs of the Madlibs operation.
/// </summary>
public sealed record MadlibsRequest
{
    /// <summary>
    /// Story category
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Number of stories
    /// </summary>
    public int? Count { get; init; }
}
