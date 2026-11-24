namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Distancecalculator operation.
/// </summary>
public sealed record DistancecalculatorRequest
{
    /// <summary>
    /// The latitude of the first location
    /// </summary>
    public required double Lat1 { get; init; }

    /// <summary>
    /// The longitude of the first location
    /// </summary>
    public required double Lon1 { get; init; }

    /// <summary>
    /// The latitude of the second location
    /// </summary>
    public required double Lat2 { get; init; }

    /// <summary>
    /// The longitude of the second location
    /// </summary>
    public required double Lon2 { get; init; }
}
