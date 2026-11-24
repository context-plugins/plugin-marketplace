namespace Contentstack.Requests.Experiences;

/// <summary>
/// The inputs of the GetExperiencePriority operation.
/// </summary>
public sealed record GetExperiencePriorityRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
