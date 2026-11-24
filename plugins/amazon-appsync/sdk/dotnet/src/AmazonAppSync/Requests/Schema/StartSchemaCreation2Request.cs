using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.Schema;

/// <summary>
/// The inputs of the StartSchemaCreation2 operation.
/// </summary>
public sealed record StartSchemaCreation2Request
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisSchemacreationRequest? Body { get; init; }
}
