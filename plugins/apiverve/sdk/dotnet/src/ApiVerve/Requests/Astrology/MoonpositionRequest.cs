namespace ApiVerve.Requests.Astrology;

/// <summary>
/// The inputs of the Moonposition operation.
/// </summary>
public sealed record MoonpositionRequest
{
    /// <summary>
    /// The latitude of the location
    /// </summary>
    public required double Lat { get; init; }

    /// <summary>
    /// The longitude of the location
    /// </summary>
    public required double Lon { get; init; }

    /// <summary>
    /// The date to get the moon position data for (MM-dd-yyyy)
    /// </summary>
    public string? Date { get; init; }

    /// <summary>
    /// The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided
    /// </summary>
    public string? Time { get; init; }

    /// <summary>
    /// IANA timezone name the date and time are given in. Defaults to the timezone of the supplied coordinates
    /// </summary>
    public string? Timezone { get; init; }
}
