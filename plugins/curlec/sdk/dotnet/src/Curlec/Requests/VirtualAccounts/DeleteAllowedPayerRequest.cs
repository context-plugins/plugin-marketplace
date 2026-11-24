namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the DeleteAllowedPayer operation.
/// </summary>
public sealed record DeleteAllowedPayerRequest
{
    /// <summary>
    /// Virtual Account ID (va_*).
    /// </summary>
    public required string VaId { get; init; }

    /// <summary>
    /// Allowed payer ID to remove.
    /// </summary>
    public required string Id { get; init; }
}
