using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Customers;

/// <summary>
/// The inputs of the RestoreCustomer operation.
/// </summary>
public sealed record RestoreCustomerRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
