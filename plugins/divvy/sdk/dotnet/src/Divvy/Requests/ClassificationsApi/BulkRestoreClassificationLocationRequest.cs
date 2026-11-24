namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkRestoreClassificationLocation operation.
/// </summary>
public sealed record BulkRestoreClassificationLocationRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
