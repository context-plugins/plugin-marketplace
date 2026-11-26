namespace Bill.Requests.FundingAccounts;

/// <summary>
/// The inputs of the GetFundingAccountPermission operation.
/// </summary>
public sealed record GetFundingAccountPermissionRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
