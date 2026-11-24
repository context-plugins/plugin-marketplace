namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Coordinatesaresea operation.
/// </summary>
public sealed record CoordinatesareseaRequest
{
    /// <summary>
    /// The latitude of the coordinates
    /// </summary>
    public required double Lat { get; init; }

    /// <summary>
    /// The longitude of the coordinates
    /// </summary>
    public required double Lon { get; init; }
}
