namespace Unbounce.Requests.Accounts;

/// <summary>
/// The inputs of the GetAccount operation.
/// </summary>
public sealed record GetAccountRequest
{
    public required string AccountId { get; init; }
}
