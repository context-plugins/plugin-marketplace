using Paid.Models;

namespace Paid.Requests.ValueReceipts;

/// <summary>
/// The inputs of the SyncValueReceipt operation.
/// </summary>
public sealed record SyncValueReceiptOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public SyncValueReceiptRequest? Body { get; init; }
}
