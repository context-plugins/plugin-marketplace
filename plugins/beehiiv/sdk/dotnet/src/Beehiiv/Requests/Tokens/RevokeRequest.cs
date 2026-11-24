using Beehiiv.Models;

namespace Beehiiv.Requests.Tokens;

/// <summary>
/// The inputs of the Revoke operation.
/// </summary>
public sealed record RevokeRequest
{
    public OauthRevokeRequest? Body { get; init; }
}
