namespace Contentstack.Requests.Audiences;

/// <summary>
/// The inputs of the GetAllAudiences operation.
/// </summary>
public sealed record GetAllAudiencesRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
