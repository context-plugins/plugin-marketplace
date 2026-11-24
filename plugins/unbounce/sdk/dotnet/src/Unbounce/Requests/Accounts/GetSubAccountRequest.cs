namespace Unbounce.Requests.Accounts;

/// <summary>
/// The inputs of the GetSubAccount operation.
/// </summary>
public sealed record GetSubAccountRequest
{
    public required string SubAccountId { get; init; }
}
