namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkArchiveClassificationItem operation.
/// </summary>
public sealed record BulkArchiveClassificationItemRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
