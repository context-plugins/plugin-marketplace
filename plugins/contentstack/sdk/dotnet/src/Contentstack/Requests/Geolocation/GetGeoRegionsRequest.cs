namespace Contentstack.Requests.Geolocation;

/// <summary>
/// The inputs of the GetGeoRegions operation.
/// </summary>
public sealed record GetGeoRegionsRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
