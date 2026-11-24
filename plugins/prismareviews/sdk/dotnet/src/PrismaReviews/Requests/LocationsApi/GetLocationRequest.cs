namespace PrismaReviews.Requests.LocationsApi;

/// <summary>
/// The inputs of the GetLocation operation.
/// </summary>
public sealed record GetLocationRequest
{
    /// <summary>
    /// Location ID (<c>loc_…</c>).
    /// </summary>
    public required string Id { get; init; }
}
