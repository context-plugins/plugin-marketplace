using System;
using Paid.Models;

namespace Paid.Requests.CustomerGroups;

/// <summary>
/// The inputs of the DeleteCustomerGroupMembers operation.
/// </summary>
public sealed record DeleteCustomerGroupMembersRequest
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
