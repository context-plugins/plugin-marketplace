namespace Divvy.Requests.Transactions;

/// <summary>
/// The inputs of the CreateReceiptUploadUrl operation.
/// </summary>
public sealed record CreateReceiptUploadUrlRequest
{
    public string? ApiToken { get; init; }
}
