namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Incometaxcalculator operation.
/// </summary>
public sealed record IncometaxcalculatorRequest
{
    /// <summary>
    /// Gross annual income in USD
    /// </summary>
    public required double Income { get; init; }

    /// <summary>
    /// Tax rate as a percentage (e.g., 22 for 22%)
    /// </summary>
    public required double Rate { get; init; }

    /// <summary>
    /// Optional deduction amount to subtract from income before calculating tax
    /// </summary>
    public double? Deduction { get; init; }
}
