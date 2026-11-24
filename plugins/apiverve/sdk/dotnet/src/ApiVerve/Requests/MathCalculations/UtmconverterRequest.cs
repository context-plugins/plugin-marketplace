namespace ApiVerve.Requests.MathCalculations;

/// <summary>
/// The inputs of the Utmconverter operation.
/// </summary>
public sealed record UtmconverterRequest
{
    /// <summary>
    /// Latitude (-90 to 90)
    /// </summary>
    public required double Latitude { get; init; }

    /// <summary>
    /// Longitude (-180 to 180)
    /// </summary>
    public required double Longitude { get; init; }

    /// <summary>
    /// Conversion direction
    /// </summary>
    public string? Direction { get; init; }
}
