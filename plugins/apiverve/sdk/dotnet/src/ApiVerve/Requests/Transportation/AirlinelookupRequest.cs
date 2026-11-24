namespace ApiVerve.Requests.Transportation;

/// <summary>
/// The inputs of the Airlinelookup operation.
/// </summary>
public sealed record AirlinelookupRequest
{
    /// <summary>
    /// The IATA code of the airline for which you want to get the information (e.g., AA)
    /// </summary>
    public required string Iata { get; init; }
}
