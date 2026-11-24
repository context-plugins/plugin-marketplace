using PrismaReviews.Models;

namespace PrismaReviews.Requests.Connections;

/// <summary>
/// The inputs of the CreateConnection operation.
/// </summary>
public sealed record CreateConnectionRequest
{
    public required ConnectionInput Body { get; init; }
}
