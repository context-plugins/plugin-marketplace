using Statable.Models;

namespace Statable.Requests.Keys;

/// <summary>
/// The inputs of the CreateApiKey operation.
/// </summary>
public sealed record CreateApiKeyOperationRequest
{
    public required CreateApiKeyRequest Body { get; init; }
}
