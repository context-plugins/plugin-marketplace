using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Types;

/// <summary>
/// The inputs of the CreateType operation.
/// </summary>
public sealed record CreateTypeRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisTypesRequest? Body { get; init; }
}
