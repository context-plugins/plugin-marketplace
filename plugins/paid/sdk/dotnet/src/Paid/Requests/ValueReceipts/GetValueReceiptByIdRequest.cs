namespace Paid.Requests.ValueReceipts;

/// <summary>
/// The inputs of the GetValueReceiptById operation.
/// </summary>
public sealed record GetValueReceiptByIdRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
