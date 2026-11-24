namespace ApiVerve.Requests.Transportation;

/// <summary>
/// The inputs of the Airports operation.
/// </summary>
public sealed record AirportsRequest
{
    /// <summary>
    /// The IATA code of the airport for which you want to get the information (e.g., MCI)
    /// </summary>
    public required string Iata { get; init; }
}
