namespace Unbounce.Requests.Accounts;

/// <summary>
/// The inputs of the ListSubAccountsForAccount operation.
/// </summary>
public sealed record ListSubAccountsForAccountRequest
{
    public required string AccountId { get; init; }
}
