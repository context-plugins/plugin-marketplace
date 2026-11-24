using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Customers;

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
