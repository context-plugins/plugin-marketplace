namespace Curlec.Requests.Customers;

/// <summary>
/// The inputs of the FetchCustomer operation.
/// </summary>
public sealed record FetchCustomerRequest
{
    /// <summary>
    /// Customer ID (cust_*).
    /// </summary>
    public required string Id { get; init; }
}
