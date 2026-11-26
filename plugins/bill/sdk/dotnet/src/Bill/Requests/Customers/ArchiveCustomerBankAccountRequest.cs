using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Customers;

/// <summary>
/// The inputs of the ArchiveCustomerBankAccount operation.
/// </summary>
public sealed record ArchiveCustomerBankAccountRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    [MinLength(1)]
    public required string BankAccountId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
