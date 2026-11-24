using Curlec.Models;

namespace Curlec.Requests.Customers;

/// <summary>
/// The inputs of the UpdateCustomer operation.
/// </summary>
public sealed record UpdateCustomerRequest
{
    /// <summary>
    /// Customer ID (cust_*).
    /// </summary>
    public required string Id { get; init; }

    public required CustomersRequest1 Body { get; init; }
}
