namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Neverhaveiever operation.
/// </summary>
public sealed record NeverhaveieverRequest
{
    /// <summary>
    /// Include adult/relationship-focused statements
    /// </summary>
    public bool? Adult { get; init; }
}
