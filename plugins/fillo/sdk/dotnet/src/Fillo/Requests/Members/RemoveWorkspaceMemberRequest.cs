using Fillo.Models;

namespace Fillo.Requests.Members;

/// <summary>
/// The inputs of the RemoveWorkspaceMember operation.
/// </summary>
public sealed record RemoveWorkspaceMemberRequest
{
    /// <summary>
    /// A member id or email address inside the key's workspace.
    /// </summary>
    public required string Id { get; init; }

    public required ConfirmTarget Body { get; init; }
}
