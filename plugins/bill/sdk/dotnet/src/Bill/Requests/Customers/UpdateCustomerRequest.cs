using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Customers;

/// <summary>
/// The inputs of the UpdateCustomer operation.
/// </summary>
public sealed record UpdateCustomerRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CustomerUpdateRequestDto Body { get; init; }
}
