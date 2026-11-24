using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Resolvers;

/// <summary>
/// The inputs of the UpdateResolver operation.
/// </summary>
public sealed record UpdateResolverRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The new type name.
    /// </summary>
    public required string TypeName { get; init; }

    /// <summary>
    /// The new field name.
    /// </summary>
    public required string FieldName { get; init; }

    public V1ApisTypesResolversFieldNameRequest? Body { get; init; }
}
