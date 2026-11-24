namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the FetchVirtualAccount operation.
/// </summary>
public sealed record FetchVirtualAccountRequest
{
    /// <summary>
    /// Virtual Account ID (va_*).
    /// </summary>
    public required string Id { get; init; }
}
