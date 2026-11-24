namespace Contentstack.Requests.ContentTypes;

/// <summary>
/// The inputs of the GetSingleContentType operation.
/// </summary>
public sealed record GetSingleContentTypeRequest
{
    /// <summary>
    /// The unique identifier (UID) of the content type.
    /// </summary>
    public required string ContentTypeUid { get; init; }

    /// <summary>
    /// Retrieve a specific version of the content type schema.
    /// </summary>
    public int? Version { get; init; }

    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
