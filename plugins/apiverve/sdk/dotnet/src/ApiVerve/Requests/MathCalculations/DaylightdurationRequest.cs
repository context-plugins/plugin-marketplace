namespace ApiVerve.Requests.MathCalculations;

/// <summary>
/// The inputs of the Daylightduration operation.
/// </summary>
public sealed record DaylightdurationRequest
{
    /// <summary>
    /// Latitude of the location
    /// </summary>
    public required double Latitude { get; init; }

    /// <summary>
    /// Longitude of the location
    /// </summary>
    public required double Longitude { get; init; }

    /// <summary>
    /// Date in YYYY-MM-DD format (defaults to today)
    /// </summary>
    public string? Date { get; init; }
}
