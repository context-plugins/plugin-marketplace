using Paid.Models;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the UpsertCustomerUserByExternalId operation.
/// </summary>
public sealed record UpsertCustomerUserByExternalIdRequest
{
    public required string CustomerExternalId { get; init; }

    public required string UserExternalId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpsertCustomerUserRequest? Body { get; init; }
}
