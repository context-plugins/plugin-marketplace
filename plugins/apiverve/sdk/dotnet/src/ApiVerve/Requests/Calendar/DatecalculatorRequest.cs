namespace ApiVerve.Requests.Calendar;

/// <summary>
/// The inputs of the Datecalculator operation.
/// </summary>
public sealed record DatecalculatorRequest
{
    /// <summary>
    /// The start date for calculating the difference (format: YYYY-MM-DD)
    /// </summary>
    public required string Start { get; init; }

    /// <summary>
    /// The end date for calculating the difference (format: YYYY-MM-DD)
    /// </summary>
    public required string End { get; init; }
}
