namespace Paid.Requests.ValueReceipts;

/// <summary>
/// The inputs of the ArchiveValueReceipt operation.
/// </summary>
public sealed record ArchiveValueReceiptRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public object? Body { get; init; }
}
