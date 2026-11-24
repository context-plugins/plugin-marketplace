using System;

namespace Shortcut.Requests.Members;

/// <summary>
/// The inputs of the ListMembers operation.
/// </summary>
public sealed record ListMembersRequest
{
    /// <summary>
    /// The unique ID of the Organization to limit the list to.
    /// </summary>
    public Guid? OrgPublicId { get; init; }

    /// <summary>
    /// Filter members by their disabled state. If true, return only disabled members. If false, return only enabled members.
    /// </summary>
    public bool? Disabled { get; init; }
}
