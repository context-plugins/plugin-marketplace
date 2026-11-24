namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Magic8Ball operation.
/// </summary>
public sealed record Magic8BallRequest
{
    /// <summary>
    /// Your question for the Magic 8-Ball (optional)
    /// </summary>
    public string? Question { get; init; }
}
