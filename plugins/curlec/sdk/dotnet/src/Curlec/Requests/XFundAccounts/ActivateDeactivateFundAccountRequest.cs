using Curlec.Models;

namespace Curlec.Requests.XFundAccounts;

/// <summary>
/// The inputs of the ActivateDeactivateFundAccount operation.
/// </summary>
public sealed record ActivateDeactivateFundAccountRequest
{
    /// <summary>
    /// Unique identifier of the fund account (e.g. <c>fa_00000000000001</c>).
    /// </summary>
    public required string FundAccountId { get; init; }

    public required FundAccountsRequest1 Body { get; init; }
}
