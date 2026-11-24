namespace ApiVerve.Requests.Astrology;

/// <summary>
/// The inputs of the Sunposition operation.
/// </summary>
public sealed record SunpositionRequest
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
    /// The date to get the sun position data for (MM-DD-YYYY)
    /// </summary>
    public string? Date { get; init; }

    /// <summary>
    /// The time of day for the calculation (HH:mm format, 24-hour), read in the timezone of the coordinates. Defaults to 00:00 if not provided
    /// </summary>
    public string? Time { get; init; }

    /// <summary>
    /// IANA timezone to read the date and time in, such as America/Los_Angeles. Defaults to the timezone of the coordinates
    /// </summary>
    public string? Timezone { get; init; }
}
