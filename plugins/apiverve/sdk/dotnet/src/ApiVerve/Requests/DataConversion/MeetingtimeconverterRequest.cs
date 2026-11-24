namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Meetingtimeconverter operation.
/// </summary>
public sealed record MeetingtimeconverterRequest
{
    /// <summary>
    /// Time in HH:MM format (24-hour)
    /// </summary>
    public required string Time { get; init; }

    /// <summary>
    /// Source IANA timezone identifier
    /// </summary>
    public required string FromTimezone { get; init; }

    /// <summary>
    /// Target IANA timezone identifier
    /// </summary>
    public required string ToTimezone { get; init; }

    /// <summary>
    /// Optional date in YYYY-MM-DD format (defaults to today)
    /// </summary>
    public string? Date { get; init; }
}
