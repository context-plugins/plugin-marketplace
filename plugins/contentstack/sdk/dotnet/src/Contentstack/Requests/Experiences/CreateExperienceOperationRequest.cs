using Contentstack.Models;

namespace Contentstack.Requests.Experiences;

/// <summary>
/// The inputs of the CreateExperience operation.
/// </summary>
public sealed record CreateExperienceOperationRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    public required CreateExperienceRequest Body { get; init; }
}
