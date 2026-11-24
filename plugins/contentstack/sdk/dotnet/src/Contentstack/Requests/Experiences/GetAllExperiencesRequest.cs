namespace Contentstack.Requests.Experiences;

/// <summary>
/// The inputs of the GetAllExperiences operation.
/// </summary>
public sealed record GetAllExperiencesRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
