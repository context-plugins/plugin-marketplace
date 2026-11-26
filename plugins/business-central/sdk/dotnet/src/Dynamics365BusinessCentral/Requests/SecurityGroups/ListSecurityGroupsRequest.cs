using System;

namespace Dynamics365BusinessCentral.Requests.SecurityGroups;

/// <summary>
/// The inputs of the ListSecurityGroups operation.
/// </summary>
public sealed record ListSecurityGroupsRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
