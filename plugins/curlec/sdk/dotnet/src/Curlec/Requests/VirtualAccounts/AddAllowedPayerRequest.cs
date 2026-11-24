using Curlec.Models;

namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the AddAllowedPayer operation.
/// </summary>
public sealed record AddAllowedPayerRequest
{
    /// <summary>
    /// Virtual Account ID (va_*).
    /// </summary>
    public required string VaId { get; init; }

    public required VirtualAccountsAllowedPayersRequest Body { get; init; }
}
