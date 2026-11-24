using Fillo.Models;

namespace Fillo.Requests.Credentials;

/// <summary>
/// The inputs of the CreateSyncToken operation.
/// </summary>
public sealed record CreateSyncTokenRequest
{
    public ApiV1ManageSyncTokensRequest? Body { get; init; }
}
