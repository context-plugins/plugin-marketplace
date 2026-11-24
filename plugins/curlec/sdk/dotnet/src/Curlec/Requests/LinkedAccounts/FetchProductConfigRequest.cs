namespace Curlec.Requests.LinkedAccounts;

/// <summary>
/// The inputs of the FetchProductConfig operation.
/// </summary>
public sealed record FetchProductConfigRequest
{
    /// <summary>
    /// Linked Account ID (acc_*).
    /// </summary>
    public required string AccountId { get; init; }

    /// <summary>
    /// Product configuration ID (acc_prd_*).
    /// </summary>
    public required string ProductId { get; init; }
}
