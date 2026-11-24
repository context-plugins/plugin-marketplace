namespace FlowAccount.Requests.BatchImport;

/// <summary>
/// The inputs of the BatchImportMarkViewed operation.
/// </summary>
public sealed record BatchImportMarkViewedRequest
{
    public required string Culture { get; init; }

    public long? UserId { get; init; }

    public string? BatchId { get; init; }

    public required long Body { get; init; }
}
