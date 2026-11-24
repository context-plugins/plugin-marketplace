namespace AmazonAppSync.Requests.Schema;

/// <summary>
/// The inputs of the GetSchemaCreationStatus2 operation.
/// </summary>
public sealed record GetSchemaCreationStatus2Request
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }
}
