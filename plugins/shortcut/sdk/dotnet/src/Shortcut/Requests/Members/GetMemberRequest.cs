using System;

namespace Shortcut.Requests.Members;

/// <summary>
/// The inputs of the GetMember operation.
/// </summary>
public sealed record GetMemberRequest
{
    /// <summary>
    /// The Member's unique ID.
    /// </summary>
    public required Guid MemberPublicId { get; init; }

    /// <summary>
    /// The unique ID of the Organization to limit the lookup to.
    /// </summary>
    public Guid? OrgPublicId { get; init; }
}
