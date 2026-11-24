namespace ApiVerve.Requests.Science;

/// <summary>
/// The inputs of the Meteorites operation.
/// </summary>
public sealed record MeteoritesRequest
{
    /// <summary>
    /// The name of the meteorite you want to search for
    /// </summary>
    public required string Name { get; init; }

    /// <summary>
    /// Minimum mass of the meteorite in grams
    /// </summary>
    public double? Mass { get; init; }

    /// <summary>
    /// The year the meteorite fell to Earth
    /// </summary>
    public double? Year { get; init; }
}
