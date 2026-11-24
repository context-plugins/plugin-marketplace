namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Lovecalculator operation.
/// </summary>
public sealed record LovecalculatorRequest
{
    /// <summary>
    /// The first name to calculate love compatibility
    /// </summary>
    public required string Name1 { get; init; }

    /// <summary>
    /// The second name to calculate love compatibility
    /// </summary>
    public required string Name2 { get; init; }
}
