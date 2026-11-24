namespace DoiT.Requests.Customers;

/// <summary>
/// The inputs of the GetCustomer operation.
/// </summary>
public sealed record GetCustomerRequest
{
    /// <summary>
    /// Customer ID. Must match the customer resolved from the bearer token - a token scoped to a different customer gets <c>403</c>.
    /// </summary>
    public required string CustomerId { get; init; }
}
