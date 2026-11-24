using Contentstack.Models;

namespace Contentstack.Requests.Experiences;

/// <summary>
/// The inputs of the UpdateExperiencePriority operation.
/// </summary>
public sealed record UpdateExperiencePriorityRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    public required ExperiencePriority Body { get; init; }
}
