namespace Divvy.Requests.CreditMemos;

/// <summary>
/// The inputs of the BulkRestoreCreditMemo operation.
/// </summary>
public sealed record BulkRestoreCreditMemoRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
