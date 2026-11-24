namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkRestoreClassificationJob operation.
/// </summary>
public sealed record BulkRestoreClassificationJobRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
