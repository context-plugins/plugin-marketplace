namespace Bill.Requests.Documents;

/// <summary>
/// The inputs of the UploadStatus operation.
/// </summary>
public sealed record UploadStatusRequest
{
    public required string Ids { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
