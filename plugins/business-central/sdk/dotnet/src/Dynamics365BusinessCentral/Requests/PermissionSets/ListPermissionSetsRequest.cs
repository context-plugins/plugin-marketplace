using System;

namespace Dynamics365BusinessCentral.Requests.PermissionSets;

/// <summary>
/// The inputs of the ListPermissionSets operation.
/// </summary>
public sealed record ListPermissionSetsRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
