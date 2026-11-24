using Beehiiv.Models;

namespace Beehiiv.Requests.Tokens;

/// <summary>
/// The inputs of the Introspect operation.
/// </summary>
public sealed record IntrospectRequest
{
    public OauthIntrospectRequest? Body { get; init; }
}
