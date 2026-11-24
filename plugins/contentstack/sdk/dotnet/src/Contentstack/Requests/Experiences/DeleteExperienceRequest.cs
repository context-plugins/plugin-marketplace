namespace Contentstack.Requests.Experiences;

/// <summary>
/// The inputs of the DeleteExperience operation.
/// </summary>
public sealed record DeleteExperienceRequest
{
    /// <summary>
    /// The unique identifier of the experience.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
