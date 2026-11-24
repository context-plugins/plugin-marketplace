namespace Contentstack.Requests.ContentTypes;

/// <summary>
/// The inputs of the DeleteContentType operation.
/// </summary>
public sealed record DeleteContentTypeRequest
{
    /// <summary>
    /// The unique identifier (UID) of the content type.
    /// </summary>
    public required string ContentTypeUid { get; init; }

    /// <summary>
    /// The API key identifying the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }
}
