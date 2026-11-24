using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Customers;

/// <summary>
/// The inputs of the CreateCustomerBankAccount operation.
/// </summary>
public sealed record CreateCustomerBankAccountRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CreateCustomerBankAccountRequestDto Body { get; init; }
}
