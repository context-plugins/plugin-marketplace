using Curlec.Models;

namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the UpdateVirtualAccount operation.
/// </summary>
public sealed record UpdateVirtualAccountRequest
{
    /// <summary>
    /// Virtual Account ID (va_*).
    /// </summary>
    public required string Id { get; init; }

    public required VirtualAccountsRequest1 Body { get; init; }
}
