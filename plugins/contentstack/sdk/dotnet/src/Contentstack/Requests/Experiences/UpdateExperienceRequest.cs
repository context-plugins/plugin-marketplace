using Contentstack.Models;

namespace Contentstack.Requests.Experiences;

/// <summary>
/// The inputs of the UpdateExperience operation.
/// </summary>
public sealed record UpdateExperienceRequest
{
    /// <summary>
    /// The unique identifier of the experience.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    public required CreateExperienceRequest Body { get; init; }
}
