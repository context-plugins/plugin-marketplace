using Audioscrape.Models;

namespace Audioscrape.Requests.ApiKeys;

/// <summary>
/// The inputs of the CreateApiKey operation.
/// </summary>
public sealed record CreateApiKeyRequest
{
    public required CreateApiKey Body { get; init; }
}
