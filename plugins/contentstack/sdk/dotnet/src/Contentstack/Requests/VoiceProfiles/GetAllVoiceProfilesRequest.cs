namespace Contentstack.Requests.VoiceProfiles;

/// <summary>
/// The inputs of the GetAllVoiceProfiles operation.
/// </summary>
public sealed record GetAllVoiceProfilesRequest
{
    /// <summary>
    /// The unique identifier of the Brand Kit.
    /// </summary>
    public required string BrandKitUid { get; init; }

    /// <summary>
    /// The unique identifier of the organization.
    /// </summary>
    public required string OrganizationUid { get; init; }
}
