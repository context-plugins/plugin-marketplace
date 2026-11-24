using Beehiiv.Models;

namespace Beehiiv.Requests.Tokens;

/// <summary>
/// The inputs of the Token operation.
/// </summary>
public sealed record TokenRequest
{
    public OauthTokenRequest? Body { get; init; }
}
