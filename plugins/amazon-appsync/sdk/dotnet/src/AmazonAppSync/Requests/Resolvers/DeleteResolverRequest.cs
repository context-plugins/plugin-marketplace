namespace AmazonAppSync.Requests.Resolvers;

/// <summary>
/// The inputs of the DeleteResolver operation.
/// </summary>
public sealed record DeleteResolverRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The name of the resolver type.
    /// </summary>
    public required string TypeName { get; init; }

    /// <summary>
    /// The resolver field name.
    /// </summary>
    public required string FieldName { get; init; }
}
