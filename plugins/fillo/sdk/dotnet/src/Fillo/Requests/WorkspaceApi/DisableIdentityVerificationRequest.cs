using Fillo.Models;

namespace Fillo.Requests.WorkspaceApi;

/// <summary>
/// The inputs of the DisableIdentityVerification operation.
/// </summary>
public sealed record DisableIdentityVerificationRequest
{
    public required ConfirmTarget Body { get; init; }
}
