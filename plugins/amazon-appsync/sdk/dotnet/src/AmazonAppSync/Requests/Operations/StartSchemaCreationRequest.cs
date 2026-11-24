using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Operations;

/// <summary>
/// The inputs of the StartSchemaCreation operation.
/// </summary>
public sealed record StartSchemaCreationRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisSchemacreationRequest? Body { get; init; }
}
