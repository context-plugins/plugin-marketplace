using Bill.Models;

namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the CreateBankAccount operation.
/// </summary>
public sealed record CreateBankAccountRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required OrganizationBankAccountCreateRequestDto Body { get; init; }
}
