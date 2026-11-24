using Basiq.Models;

namespace Basiq.Requests.AuthLinks;

/// <summary>
/// The inputs of the PostAuthLink operation.
/// </summary>
public sealed record PostAuthLinkRequest
{
    public required string UserId { get; init; }

    public UsersAuthLinkRequest? Body { get; init; }
}
