namespace ApiVerve.Requests.Weather;

/// <summary>
/// The inputs of the Weatherseasons operation.
/// </summary>
public sealed record WeatherseasonsRequest
{
    /// <summary>
    /// The year to get the dates of the solstice and equinox
    /// </summary>
    public int? Year { get; init; }
}
