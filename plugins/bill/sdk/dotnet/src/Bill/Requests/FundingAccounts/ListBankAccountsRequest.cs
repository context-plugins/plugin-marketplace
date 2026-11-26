using Bill.Core.Validation.Attributes;

namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the ListBankAccounts operation.
/// </summary>
public sealed record ListBankAccountsRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Sort { get; init; }

    public string? Filters { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
