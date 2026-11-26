using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.PermissionSets;

/// <summary>
/// The inputs of the CreateUserPermission operation.
/// </summary>
public sealed record CreateUserPermissionRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The user security ID
    /// </summary>
    public required Guid UserId { get; init; }

    public required CompaniesApiUsersApiUserPermissionsRequest Body { get; init; }
}
