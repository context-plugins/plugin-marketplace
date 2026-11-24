using PrismaReviews.Models;

namespace PrismaReviews.Requests.Connections;

/// <summary>
/// The inputs of the CreateConnectLink operation.
/// </summary>
public sealed record CreateConnectLinkRequest
{
    public V1ConnectLinksRequest? Body { get; init; }
}
