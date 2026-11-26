namespace Bill.Requests.CreditMemos;

/// <summary>
/// The inputs of the BulkArchiveCreditMemo operation.
/// </summary>
public sealed record BulkArchiveCreditMemoRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
