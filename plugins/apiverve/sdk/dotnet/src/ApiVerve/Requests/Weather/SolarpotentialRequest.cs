namespace ApiVerve.Requests.Weather;

/// <summary>
/// The inputs of the Solarpotential operation.
/// </summary>
public sealed record SolarpotentialRequest
{
    /// <summary>
    /// The latitude of the location
    /// </summary>
    public required double Lat { get; init; }

    /// <summary>
    /// The longitude of the location
    /// </summary>
    public required double Lon { get; init; }
}
