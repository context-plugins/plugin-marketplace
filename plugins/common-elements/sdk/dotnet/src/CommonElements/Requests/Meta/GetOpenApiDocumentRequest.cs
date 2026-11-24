using CommonElements.Models.Enums;

namespace CommonElements.Requests.Meta;

/// <summary>
/// The inputs of the GetOpenApiDocument operation.
/// </summary>
public sealed record GetOpenApiDocumentRequest
{
    /// <summary>
    /// <c>json</c> (default) or <c>yaml</c>.
    /// </summary>
    public Format? Format { get; init; }
}
