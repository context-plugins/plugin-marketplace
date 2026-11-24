namespace Contentstack.Requests.Audiences;

/// <summary>
/// The inputs of the DeleteAudience operation.
/// </summary>
public sealed record DeleteAudienceRequest
{
    /// <summary>
    /// The unique identifier of the audience.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
