namespace PrismaReviews.Requests.Connections;

/// <summary>
/// The inputs of the DeleteConnection operation.
/// </summary>
public sealed record DeleteConnectionRequest
{
    /// <summary>
    /// Connection ID (<c>con_…</c>).
    /// </summary>
    public required string Id { get; init; }
}
