using Fillo.Models;

namespace Fillo.Requests.WorkspaceApi;

/// <summary>
/// The inputs of the SetCodeSyncPolicy operation.
/// </summary>
public sealed record SetCodeSyncPolicyRequest
{
    public required ApiV1ManageProjectCodeSyncRequest Body { get; init; }
}
