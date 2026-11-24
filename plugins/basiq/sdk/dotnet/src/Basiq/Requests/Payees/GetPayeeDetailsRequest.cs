using System;

namespace Basiq.Requests.Payees;

/// <summary>
/// The inputs of the GetPayeeDetails operation.
/// </summary>
public sealed record GetPayeeDetailsRequest
{
    /// <summary>
    /// The unique identifier of the user.
    /// </summary>
    public required Guid UserId { get; init; }

    /// <summary>
    /// The unique identifier of the payee.
    /// </summary>
    public required Guid PayeeId { get; init; }
}
