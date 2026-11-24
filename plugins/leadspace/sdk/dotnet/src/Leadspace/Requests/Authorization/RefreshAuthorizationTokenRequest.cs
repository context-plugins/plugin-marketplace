using Leadspace.Models;

namespace Leadspace.Requests.Authorization;

/// <summary>
/// The inputs of the RefreshAuthorizationToken operation.
/// </summary>
public sealed record RefreshAuthorizationTokenRequest
{
    public required RefreshRequest Body { get; init; }
}
