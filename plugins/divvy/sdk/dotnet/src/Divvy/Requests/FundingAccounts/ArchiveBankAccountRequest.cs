using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.FundingAccounts;

/// <summary>
/// The inputs of the ArchiveBankAccount operation.
/// </summary>
public sealed record ArchiveBankAccountRequest
{
    [MinLength(1)]
    public required string BankAccountId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
