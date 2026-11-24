using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Customers;

/// <summary>
/// The inputs of the UpdateCustomerContact operation.
/// </summary>
public sealed record UpdateCustomerContactRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    [MinLength(1)]
    public required string ContactId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdateCustomerContactRequestDto Body { get; init; }
}
