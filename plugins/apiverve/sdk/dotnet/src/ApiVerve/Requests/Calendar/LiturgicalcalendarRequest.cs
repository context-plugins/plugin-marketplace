namespace ApiVerve.Requests.Calendar;

/// <summary>
/// The inputs of the Liturgicalcalendar operation.
/// </summary>
public sealed record LiturgicalcalendarRequest
{
    /// <summary>
    /// The month to get Liturgical Calendar data for (default: current month)
    /// </summary>
    public int? Month { get; init; }

    /// <summary>
    /// The year to get Liturgical Calendar data for (default: current year)
    /// </summary>
    public int? Year { get; init; }
}
