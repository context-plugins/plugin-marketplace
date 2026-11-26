namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the ListPayableApCards operation.
/// </summary>
public sealed record ListPayableApCardsRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
