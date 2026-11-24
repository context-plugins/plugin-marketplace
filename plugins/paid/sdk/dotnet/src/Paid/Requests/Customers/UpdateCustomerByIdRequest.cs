using Paid.Models;

namespace Paid.Requests.Customers;

/// <summary>
/// The inputs of the UpdateCustomerById operation.
/// </summary>
public sealed record UpdateCustomerByIdRequest
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
    public UpdateCustomerRequest? Body { get; init; }
}
