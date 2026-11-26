using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Customers;

/// <summary>
/// The inputs of the UpdateCustomerBankAccount operation.
/// </summary>
public sealed record UpdateCustomerBankAccountRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    [MinLength(1)]
    public required string BankAccountId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required UpdateCustomerBankAccountRequestDto Body { get; init; }
}
