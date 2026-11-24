using Curlec.Models;

namespace Curlec.Requests.XFundAccounts;

/// <summary>
/// The inputs of the CreateFundAccount operation.
/// </summary>
public sealed record CreateFundAccountRequest
{
    public required FundAccountsRequest Body { get; init; }
}
