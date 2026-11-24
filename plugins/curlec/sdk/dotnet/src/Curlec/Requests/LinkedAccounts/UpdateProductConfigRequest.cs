using Curlec.Models;

namespace Curlec.Requests.LinkedAccounts;

/// <summary>
/// The inputs of the UpdateProductConfig operation.
/// </summary>
public sealed record UpdateProductConfigRequest
{
    /// <summary>
    /// Linked Account ID (acc_*).
    /// </summary>
    public required string AccountId { get; init; }

    /// <summary>
    /// Product configuration ID (acc_prd_*).
    /// </summary>
    public required string ProductId { get; init; }

    public required V2AccountsProductsRequest1 Body { get; init; }
}
