namespace ApiVerve.Requests.Transportation;

/// <summary>
/// The inputs of the Airportdistance operation.
/// </summary>
public sealed record AirportdistanceRequest
{
    /// <summary>
    /// The IATA code of the first airport (e.g. JFK)
    /// </summary>
    public required string Iata1 { get; init; }

    /// <summary>
    /// The IATA code of the second airport (e.g. LAX)
    /// </summary>
    public required string Iata2 { get; init; }
}
