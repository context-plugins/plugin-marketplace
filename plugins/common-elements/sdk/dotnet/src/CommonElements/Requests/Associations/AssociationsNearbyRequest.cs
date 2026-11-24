namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsNearby operation.
/// </summary>
public sealed record AssociationsNearbyRequest
{
    /// <summary>
    /// Latitude, -90 to 90.
    /// </summary>
    public required double Lat { get; init; }

    /// <summary>
    /// Longitude, -180 to 180.
    /// </summary>
    public required double Lng { get; init; }

    /// <summary>
    /// Search radius in kilometres, 0.1 to 50 (default 2).
    /// </summary>
    public double? RadiusKm { get; init; }

    /// <summary>
    /// One of "hoa", "condo", "coop".
    /// </summary>
    public string? Subtype { get; init; }

    /// <summary>
    /// Max results, 1 to 50 (default 20).
    /// </summary>
    public double? Limit { get; init; }
}
