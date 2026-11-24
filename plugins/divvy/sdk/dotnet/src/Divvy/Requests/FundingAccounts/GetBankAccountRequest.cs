using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.FundingAccounts;

/// <summary>
/// The inputs of the GetBankAccount operation.
/// </summary>
public sealed record GetBankAccountRequest
{
    [MinLength(1)]
    public required string BankAccountId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
