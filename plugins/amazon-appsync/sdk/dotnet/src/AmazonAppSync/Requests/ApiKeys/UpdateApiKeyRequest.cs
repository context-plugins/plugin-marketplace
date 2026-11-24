using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.ApiKeys;

/// <summary>
/// The inputs of the UpdateApiKey operation.
/// </summary>
public sealed record UpdateApiKeyRequest
{
    /// <summary>
    /// The ID for the GraphQL API.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The API key ID.
    /// </summary>
    public required string Id { get; init; }

    public V1ApisApikeysRequest1? Body { get; init; }
}
