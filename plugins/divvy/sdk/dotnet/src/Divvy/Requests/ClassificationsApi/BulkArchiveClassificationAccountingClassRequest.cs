namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkArchiveClassificationAccountingClass operation.
/// </summary>
public sealed record BulkArchiveClassificationAccountingClassRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
