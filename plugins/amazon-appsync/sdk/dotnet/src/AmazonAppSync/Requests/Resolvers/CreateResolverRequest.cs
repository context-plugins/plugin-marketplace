using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Resolvers;

/// <summary>
/// The inputs of the CreateResolver operation.
/// </summary>
public sealed record CreateResolverRequest
{
    /// <summary>
    /// The ID for the GraphQL API for which the resolver is being created.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The name of the Type.
    /// </summary>
    public required string TypeName { get; init; }

    public V1ApisTypesResolversRequest? Body { get; init; }
}
