namespace Curlec.Requests.XFundAccounts;

/// <summary>
/// The inputs of the FetchFundAccount operation.
/// </summary>
public sealed record FetchFundAccountRequest
{
    /// <summary>
    /// Unique identifier of the fund account (e.g. <c>fa_00000000000001</c>).
    /// </summary>
    public required string FundAccountId { get; init; }
}
