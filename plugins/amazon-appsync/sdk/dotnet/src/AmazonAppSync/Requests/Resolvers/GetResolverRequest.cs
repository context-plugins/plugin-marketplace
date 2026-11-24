namespace AmazonAppSync.Requests.Resolvers;

/// <summary>
/// The inputs of the GetResolver operation.
/// </summary>
public sealed record GetResolverRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The resolver type name.
    /// </summary>
    public required string TypeName { get; init; }

    /// <summary>
    /// The resolver field name.
    /// </summary>
    public required string FieldName { get; init; }
}
