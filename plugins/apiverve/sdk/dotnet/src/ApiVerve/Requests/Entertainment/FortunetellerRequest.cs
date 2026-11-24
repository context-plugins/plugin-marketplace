namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Fortuneteller operation.
/// </summary>
public sealed record FortunetellerRequest
{
    /// <summary>
    /// Fortune category
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Optional question for personalized fortune (max 500 characters)
    /// </summary>
    public string? Question { get; init; }
}
