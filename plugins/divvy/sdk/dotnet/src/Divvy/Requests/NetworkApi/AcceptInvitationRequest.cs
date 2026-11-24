using Divvy.Models;

namespace Divvy.Requests.NetworkApi;

/// <summary>
/// The inputs of the AcceptInvitation operation.
/// </summary>
public sealed record AcceptInvitationRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required AcceptInvitationRequestDto Body { get; init; }
}
