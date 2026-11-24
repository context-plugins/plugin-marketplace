namespace Airwallex.Requests.Customers;

/// <summary>
/// The inputs of the GetCustomer operation.
/// </summary>
public sealed record GetCustomerRequest
{
    public required string Id { get; init; }
}
