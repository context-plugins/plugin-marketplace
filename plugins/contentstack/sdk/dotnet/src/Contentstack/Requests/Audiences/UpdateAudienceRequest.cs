using Contentstack.Models;

namespace Contentstack.Requests.Audiences;

/// <summary>
/// The inputs of the UpdateAudience operation.
/// </summary>
public sealed record UpdateAudienceRequest
{
    /// <summary>
    /// The unique identifier of the audience.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    public required CreateAudienceRequest Body { get; init; }
}
