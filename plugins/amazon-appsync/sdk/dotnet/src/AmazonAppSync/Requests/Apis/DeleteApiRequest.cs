namespace AmazonAppSync.Requests.Apis;

/// <summary>
/// The inputs of the DeleteApi operation.
/// </summary>
public sealed record DeleteApiRequest
{
    /// <summary>
    /// The Api ID.
    /// </summary>
    public required string ApiId { get; init; }
}
