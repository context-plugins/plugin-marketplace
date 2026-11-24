using Paid.Models;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the CreateCustomerAlias operation.
/// </summary>
public sealed record CreateCustomerAliasRequest
{
    /// <summary>
    /// Paid customer display id
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CustomerAliasCreateRequest? Body { get; init; }
}
