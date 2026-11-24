namespace AmazonAppSync.Requests.Apis;

/// <summary>
/// The inputs of the GetApi operation.
/// </summary>
public sealed record GetApiRequest
{
    /// <summary>
    /// The Api ID.
    /// </summary>
    public required string ApiId { get; init; }
}
