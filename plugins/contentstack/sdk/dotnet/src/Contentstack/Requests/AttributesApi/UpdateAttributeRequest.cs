using Contentstack.Models;

namespace Contentstack.Requests.AttributesApi;

/// <summary>
/// The inputs of the UpdateAttribute operation.
/// </summary>
public sealed record UpdateAttributeRequest
{
    /// <summary>
    /// The unique identifier of the attribute.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    public required CreateAttributeRequest Body { get; init; }
}
