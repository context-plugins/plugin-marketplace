using Paid.Models;

namespace Paid.Requests.ValueReceipts;

/// <summary>
/// The inputs of the PublishValueReceipt operation.
/// </summary>
public sealed record PublishValueReceiptRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public PublishValueReceiptBody? Body { get; init; }
}
