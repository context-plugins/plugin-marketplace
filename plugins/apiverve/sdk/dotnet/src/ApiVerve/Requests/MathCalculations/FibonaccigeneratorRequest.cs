namespace ApiVerve.Requests.MathCalculations;

/// <summary>
/// The inputs of the Fibonaccigenerator operation.
/// </summary>
public sealed record FibonaccigeneratorRequest
{
    /// <summary>
    /// Number of Fibonacci numbers to generate
    /// </summary>
    public required int Count { get; init; }

    /// <summary>
    /// Start from this position in the sequence
    /// </summary>
    public int? Startfrom { get; init; }
}
