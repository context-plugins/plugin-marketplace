using Curlec.Models;

namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the CloseVirtualAccount operation.
/// </summary>
public sealed record CloseVirtualAccountRequest
{
    /// <summary>
    /// Virtual Account ID (va_*).
    /// </summary>
    public required string Id { get; init; }

    public required VirtualAccountsCloseRequest Body { get; init; }
}
