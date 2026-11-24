namespace AmazonAppSync.Requests.Operations;

/// <summary>
/// The inputs of the GetSchemaCreationStatus operation.
/// </summary>
public sealed record GetSchemaCreationStatusRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }
}
