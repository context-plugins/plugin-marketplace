using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the UpdateBankAccount operation.
/// </summary>
public sealed record UpdateBankAccountRequest
{
    [MinLength(1)]
    public required string BankAccountId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required OrganizationBankAccountUpdateRequestDto Body { get; init; }
}
