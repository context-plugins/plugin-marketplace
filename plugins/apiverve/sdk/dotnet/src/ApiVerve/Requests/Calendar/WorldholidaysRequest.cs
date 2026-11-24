namespace ApiVerve.Requests.Calendar;

/// <summary>
/// The inputs of the Worldholidays operation.
/// </summary>
public sealed record WorldholidaysRequest
{
    /// <summary>
    /// The 2-letter country code for which you want to get the holidays
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// The year for which you want to get the holidays
    /// </summary>
    public int? Year { get; init; }
}
