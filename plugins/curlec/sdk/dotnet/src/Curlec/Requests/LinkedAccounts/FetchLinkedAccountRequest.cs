namespace Curlec.Requests.LinkedAccounts;

/// <summary>
/// The inputs of the FetchLinkedAccount operation.
/// </summary>
public sealed record FetchLinkedAccountRequest
{
    /// <summary>
    /// Linked Account ID (acc_*).
    /// </summary>
    public required string AccountId { get; init; }
}
