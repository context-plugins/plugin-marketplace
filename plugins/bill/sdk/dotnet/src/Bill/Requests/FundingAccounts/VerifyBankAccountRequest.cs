using Bill.Models;

namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the VerifyBankAccount operation.
/// </summary>
public sealed record VerifyBankAccountRequest
{
    public required string BankAccountId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required BankAccountVerifyRequestDto Body { get; init; }
}
