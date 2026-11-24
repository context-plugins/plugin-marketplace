using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Customers;

/// <summary>
/// The inputs of the GetCustomerBankAccount operation.
/// </summary>
public sealed record GetCustomerBankAccountRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    [MinLength(1)]
    public required string BankAccountId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
