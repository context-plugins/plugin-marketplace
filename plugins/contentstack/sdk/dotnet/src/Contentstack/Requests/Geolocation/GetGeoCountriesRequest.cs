namespace Contentstack.Requests.Geolocation;

/// <summary>
/// The inputs of the GetGeoCountries operation.
/// </summary>
public sealed record GetGeoCountriesRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
