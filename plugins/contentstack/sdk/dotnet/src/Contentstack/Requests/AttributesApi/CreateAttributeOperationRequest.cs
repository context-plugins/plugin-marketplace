using Contentstack.Models;

namespace Contentstack.Requests.AttributesApi;

/// <summary>
/// The inputs of the CreateAttribute operation.
/// </summary>
public sealed record CreateAttributeOperationRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    public required CreateAttributeRequest Body { get; init; }
}
