using Bill.Models;

namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the NominateBankAccountUser operation.
/// </summary>
public sealed record NominateBankAccountUserRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required NominateBankAccountUserRequestDto Body { get; init; }
}
