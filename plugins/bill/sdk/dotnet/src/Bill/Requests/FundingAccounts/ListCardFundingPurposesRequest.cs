namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the ListCardFundingPurposes operation.
/// </summary>
public sealed record ListCardFundingPurposesRequest
{
    public required string VendorId { get; init; }

    public required string Brand { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
