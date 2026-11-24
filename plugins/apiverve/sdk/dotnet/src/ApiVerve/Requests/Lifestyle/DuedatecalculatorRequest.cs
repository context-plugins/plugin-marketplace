namespace ApiVerve.Requests.Lifestyle;

/// <summary>
/// The inputs of the Duedatecalculator operation.
/// </summary>
public sealed record DuedatecalculatorRequest
{
    /// <summary>
    /// First day of last menstrual period (YYYY-MM-DD)
    /// </summary>
    public required string LastPeriod { get; init; }
}
