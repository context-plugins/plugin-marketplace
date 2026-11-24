namespace ApiVerve.Requests.Lifestyle;

/// <summary>
/// The inputs of the Ovulationcalculator operation.
/// </summary>
public sealed record OvulationcalculatorRequest
{
    /// <summary>
    /// First day of last menstrual period (YYYY-MM-DD)
    /// </summary>
    public required string LastPeriod { get; init; }

    /// <summary>
    /// Average menstrual cycle length in days
    /// </summary>
    public int? CycleLength { get; init; }
}
