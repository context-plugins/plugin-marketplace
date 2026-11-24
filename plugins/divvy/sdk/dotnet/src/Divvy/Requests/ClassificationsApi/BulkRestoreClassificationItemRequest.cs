namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkRestoreClassificationItem operation.
/// </summary>
public sealed record BulkRestoreClassificationItemRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
