namespace ApiVerve.Requests.MathCalculations;

/// <summary>
/// The inputs of the Permutationcombination operation.
/// </summary>
public sealed record PermutationcombinationRequest
{
    /// <summary>
    /// Total number of items
    /// </summary>
    public required int N { get; init; }

    /// <summary>
    /// Number of items to choose (must be &lt;= n)
    /// </summary>
    public required int R { get; init; }
}
