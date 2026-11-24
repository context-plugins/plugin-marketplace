namespace Contentstack.Requests.ContentTypes;

/// <summary>
/// The inputs of the GetAllContentTypes operation.
/// </summary>
public sealed record GetAllContentTypesRequest
{
    /// <summary>
    /// Set to true to include the total count of content types in the response.
    /// </summary>
    public bool? IncludeCount { get; init; }

    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
