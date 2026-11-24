namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Chessmovevalidator operation.
/// </summary>
public sealed record ChessmovevalidatorRequest
{
    /// <summary>
    /// Chess move in algebraic notation
    /// </summary>
    public required string Move { get; init; }
}
