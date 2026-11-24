namespace ApiVerve.Requests.MathCalculations;

/// <summary>
/// The inputs of the Tipcalculator operation.
/// </summary>
public sealed record TipcalculatorRequest
{
    /// <summary>
    /// The bill amount before tip
    /// </summary>
    public required double Amount { get; init; }

    /// <summary>
    /// Tip percentage
    /// </summary>
    public double? Percentage { get; init; }

    /// <summary>
    /// Number of people to split the bill
    /// </summary>
    public int? People { get; init; }

    /// <summary>
    /// Currency code for display
    /// </summary>
    public string? Currency { get; init; }
}
