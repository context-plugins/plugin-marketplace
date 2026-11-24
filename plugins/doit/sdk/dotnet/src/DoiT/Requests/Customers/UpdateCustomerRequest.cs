using DoiT.Models;

namespace DoiT.Requests.Customers;

/// <summary>
/// The inputs of the UpdateCustomer operation.
/// </summary>
public sealed record UpdateCustomerRequest
{
    /// <summary>
    /// Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets <c>403</c>.
    /// </summary>
    public required string CustomerId { get; init; }

    public required CustomerUpdate Body { get; init; }
}
