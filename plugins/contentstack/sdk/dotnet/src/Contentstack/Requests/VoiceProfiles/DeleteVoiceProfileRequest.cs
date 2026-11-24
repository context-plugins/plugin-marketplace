namespace Contentstack.Requests.VoiceProfiles;

/// <summary>
/// The inputs of the DeleteVoiceProfile operation.
/// </summary>
public sealed record DeleteVoiceProfileRequest
{
    /// <summary>
    /// The unique identifier of the Brand Kit.
    /// </summary>
    public required string BrandKitUid { get; init; }

    /// <summary>
    /// The unique identifier of the Voice Profile.
    /// </summary>
    public required string ProfileUid { get; init; }

    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }
}
