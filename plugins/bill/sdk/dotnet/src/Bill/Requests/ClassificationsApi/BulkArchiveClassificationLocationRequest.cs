namespace Bill.Requests.ClassificationsApi;

/// <summary>
/// The inputs of the BulkArchiveClassificationLocation operation.
/// </summary>
public sealed record BulkArchiveClassificationLocationRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
