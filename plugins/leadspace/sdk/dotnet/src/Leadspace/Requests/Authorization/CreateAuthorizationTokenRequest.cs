using Leadspace.Models;

namespace Leadspace.Requests.Authorization;

/// <summary>
/// The inputs of the CreateAuthorizationToken operation.
/// </summary>
public sealed record CreateAuthorizationTokenRequest
{
    public required AuthorizationRequest Body { get; init; }
}
