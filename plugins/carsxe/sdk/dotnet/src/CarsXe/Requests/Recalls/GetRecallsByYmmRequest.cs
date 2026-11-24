namespace CarsXe.Requests.Recalls;

/// <summary>
/// The inputs of the GetRecallsByYmm operation.
/// </summary>
public sealed record GetRecallsByYmmRequest
{
    /// <summary>
    /// The 4-digit model year (e.g. <c>2019</c>).
    /// </summary>
    public required string Year { get; init; }

    /// <summary>
    /// The vehicle manufacturer name (e.g. <c>Toyota</c>). Case-insensitive.
    /// </summary>
    public required string Make { get; init; }

    /// <summary>
    /// The vehicle model name (e.g. <c>Camry</c>). Case-insensitive.
    /// </summary>
    public required string Model { get; init; }
}
