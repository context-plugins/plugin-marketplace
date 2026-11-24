using Divvy.Models.Enums;

namespace Divvy.Requests.FundingAccounts;

/// <summary>
/// The inputs of the ListPayableCardAccounts operation.
/// </summary>
public sealed record ListPayableCardAccountsRequest
{
    public required CardUserStatus CardUserStatus { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
