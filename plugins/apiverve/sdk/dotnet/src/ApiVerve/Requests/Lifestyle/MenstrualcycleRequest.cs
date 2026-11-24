namespace ApiVerve.Requests.Lifestyle;

/// <summary>
/// The inputs of the Menstrualcycle operation.
/// </summary>
public sealed record MenstrualcycleRequest
{
    /// <summary>
    /// First day of last menstrual period (YYYY-MM-DD)
    /// </summary>
    public required string LastPeriod { get; init; }

    /// <summary>
    /// Average cycle length in days
    /// </summary>
    public int? CycleLength { get; init; }

    /// <summary>
    /// Average period duration in days
    /// </summary>
    public int? PeriodLength { get; init; }

    /// <summary>
    /// Number of future cycles to calculate
    /// </summary>
    public int? Cycles { get; init; }
}
