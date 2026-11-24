using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.ApiKeys;

/// <summary>
/// The inputs of the CreateApiKey operation.
/// </summary>
public sealed record CreateApiKeyRequest
{
    /// <summary>
    /// The ID for your GraphQL API.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisApikeysRequest? Body { get; init; }
}
