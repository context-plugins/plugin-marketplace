using Contentstack.Models;

namespace Contentstack.Requests.Audiences;

/// <summary>
/// The inputs of the CreateAudience operation.
/// </summary>
public sealed record CreateAudienceOperationRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    public required CreateAudienceRequest Body { get; init; }
}
