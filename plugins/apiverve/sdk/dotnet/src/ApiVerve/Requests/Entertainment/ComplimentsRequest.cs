namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Compliments operation.
/// </summary>
public sealed record ComplimentsRequest
{
    /// <summary>
    /// Include flirty/romantic compliments
    /// </summary>
    public bool? Adult { get; init; }
}
