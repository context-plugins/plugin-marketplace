using Curlec.Models.Enums;

namespace Curlec.Requests.XBankingBalances;

/// <summary>
/// The inputs of the FetchBankingBalances operation.
/// </summary>
public sealed record FetchBankingBalancesRequest
{
    /// <summary>
    /// Type of RazorpayX account to query. Accepted values: <c>current_account</c> or <c>razorpayx_lite</c>.
    /// </summary>
    public AccountType1? AccountType { get; init; }

    /// <summary>
    /// First 4 characters of IFSC
    /// </summary>
    public string? BankCode { get; init; }
}
