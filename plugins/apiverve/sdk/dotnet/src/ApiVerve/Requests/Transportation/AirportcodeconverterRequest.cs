namespace ApiVerve.Requests.Transportation;

/// <summary>
/// The inputs of the Airportcodeconverter operation.
/// </summary>
public sealed record AirportcodeconverterRequest
{
    /// <summary>
    /// The airport code to convert (IATA: 3 letters, ICAO: 4 letters)
    /// </summary>
    public required string Code { get; init; }
}
