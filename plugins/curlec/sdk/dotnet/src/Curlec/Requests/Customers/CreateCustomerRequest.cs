using Curlec.Models;

namespace Curlec.Requests.Customers;

/// <summary>
/// The inputs of the CreateCustomer operation.
/// </summary>
public sealed record CreateCustomerRequest
{
    public required CustomersRequest Body { get; init; }
}
