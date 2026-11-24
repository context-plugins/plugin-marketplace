using System;

namespace MicrosoftDynamicsNav.Requests.PermissionSets;

/// <summary>
/// The inputs of the ListUserPermissions operation.
/// </summary>
public sealed record ListUserPermissionsRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The user security ID
    /// </summary>
    public required Guid UserId { get; init; }
}
