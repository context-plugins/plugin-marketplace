using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the ArchiveBankAccountUser operation.
/// </summary>
public sealed record ArchiveBankAccountUserRequest
{
    [MinLength(1)]
    public required string BankAccountUserId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
