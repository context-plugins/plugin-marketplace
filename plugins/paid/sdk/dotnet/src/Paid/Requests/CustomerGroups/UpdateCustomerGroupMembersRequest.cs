using System;
using Paid.Models;

namespace Paid.Requests.CustomerGroups;

/// <summary>
/// The inputs of the UpdateCustomerGroupMembers operation.
/// </summary>
public sealed record UpdateCustomerGroupMembersRequest
{
    public required Guid Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public MemberRequest? Body { get; init; }
}
