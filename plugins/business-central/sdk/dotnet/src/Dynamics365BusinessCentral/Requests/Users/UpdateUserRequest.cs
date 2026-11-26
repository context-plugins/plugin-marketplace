using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.Users;

/// <summary>
/// The inputs of the UpdateUser operation.
/// </summary>
public sealed record UpdateUserRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The user security ID
    /// </summary>
    public required Guid UserId { get; init; }

    /// <summary>
    /// ETag value for optimistic concurrency control
    /// </summary>
    public required string IfMatch { get; init; }

    public required UserUpdate Body { get; init; }
}
