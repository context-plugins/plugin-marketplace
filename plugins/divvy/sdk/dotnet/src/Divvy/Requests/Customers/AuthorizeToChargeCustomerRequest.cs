using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Customers;

/// <summary>
/// The inputs of the AuthorizeToChargeCustomer operation.
/// </summary>
public sealed record AuthorizeToChargeCustomerRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required ChargeAuthorizationRequestDto Body { get; init; }
}
