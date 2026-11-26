using System;

namespace Dynamics365BusinessCentral.Requests.Users;

/// <summary>
/// The inputs of the GetNewUsersFromOffice365 operation.
/// </summary>
public sealed record GetNewUsersFromOffice365Request
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
