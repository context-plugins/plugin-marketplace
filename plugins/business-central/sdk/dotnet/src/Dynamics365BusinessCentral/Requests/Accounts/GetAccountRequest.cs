using System;

namespace Dynamics365BusinessCentral.Requests.Accounts;

/// <summary>
/// The inputs of the GetAccount operation.
/// </summary>
public sealed record GetAccountRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required Guid AccountId { get; init; }
}
