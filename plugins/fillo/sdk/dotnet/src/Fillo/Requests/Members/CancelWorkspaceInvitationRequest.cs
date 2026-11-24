namespace Fillo.Requests.Members;

/// <summary>
/// The inputs of the CancelWorkspaceInvitation operation.
/// </summary>
public sealed record CancelWorkspaceInvitationRequest
{
    /// <summary>
    /// A pending invitation id from the members listing.
    /// </summary>
    public required string Id { get; init; }
}
