namespace PrismaReviews.Requests.LocationsApi;

/// <summary>
/// The inputs of the RefreshLocation operation.
/// </summary>
public sealed record RefreshLocationRequest
{
    /// <summary>
    /// Location ID (<c>loc_…</c>).
    /// </summary>
    public required string Id { get; init; }
}
