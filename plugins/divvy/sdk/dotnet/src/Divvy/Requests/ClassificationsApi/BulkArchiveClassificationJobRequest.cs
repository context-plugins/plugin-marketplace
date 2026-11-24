namespace Divvy.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkArchiveClassificationJob operation.
/// </summary>
public sealed record BulkArchiveClassificationJobRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
