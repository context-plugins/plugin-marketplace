namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the FetchVirtualAccountPayments operation.
/// </summary>
public sealed record FetchVirtualAccountPaymentsRequest
{
    /// <summary>
    /// Virtual Account ID (va_*).
    /// </summary>
    public required string Id { get; init; }
}
