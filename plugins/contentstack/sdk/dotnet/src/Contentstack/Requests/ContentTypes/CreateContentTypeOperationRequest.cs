using Contentstack.Models;

namespace Contentstack.Requests.ContentTypes;

/// <summary>
/// The inputs of the CreateContentType operation.
/// </summary>
public sealed record CreateContentTypeOperationRequest
{
    /// <summary>
    /// The API key identifying the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    public required CreateContentTypeRequest Body { get; init; }
}
