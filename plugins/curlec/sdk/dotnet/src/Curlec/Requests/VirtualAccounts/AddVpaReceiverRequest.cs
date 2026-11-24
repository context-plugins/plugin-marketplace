using Curlec.Models;

namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the AddVpaReceiver operation.
/// </summary>
public sealed record AddVpaReceiverRequest
{
    /// <summary>
    /// Virtual Account ID (va_*).
    /// </summary>
    public required string Id { get; init; }

    public required VirtualAccountsReceiversRequest Body { get; init; }
}
