namespace Contentstack.Requests.Geolocation;

/// <summary>
/// The inputs of the GetGeoCities operation.
/// </summary>
public sealed record GetGeoCitiesRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }
}
