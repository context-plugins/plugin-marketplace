using System;

namespace Dynamics365BusinessCentral.Requests.Users;

/// <summary>
/// The inputs of the ListUsers operation.
/// </summary>
public sealed record ListUsersRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }
}
