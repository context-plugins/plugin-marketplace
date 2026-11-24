namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Mayancalendar operation.
/// </summary>
public sealed record MayancalendarRequest
{
    /// <summary>
    /// The Gregorian date in YYYY-MM-DD format
    /// </summary>
    public required string Date { get; init; }
}
