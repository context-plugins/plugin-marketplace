namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkRestoreClassificationAccountingClass operation.
/// </summary>
public sealed record BulkRestoreClassificationAccountingClassRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
