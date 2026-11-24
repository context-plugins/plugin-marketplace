using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Types;

/// <summary>
/// The inputs of the UpdateType operation.
/// </summary>
public sealed record UpdateTypeRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The new type name.
    /// </summary>
    public required string TypeName { get; init; }

    public V1ApisTypesRequest1? Body { get; init; }
}
