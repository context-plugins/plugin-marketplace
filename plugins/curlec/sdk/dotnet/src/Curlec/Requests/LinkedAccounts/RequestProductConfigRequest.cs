using Curlec.Models;

namespace Curlec.Requests.LinkedAccounts;

/// <summary>
/// The inputs of the RequestProductConfig operation.
/// </summary>
public sealed record RequestProductConfigRequest
{
    /// <summary>
    /// Linked Account ID (acc_*).
    /// </summary>
    public required string AccountId { get; init; }

    public required V2AccountsProductsRequest Body { get; init; }
}
