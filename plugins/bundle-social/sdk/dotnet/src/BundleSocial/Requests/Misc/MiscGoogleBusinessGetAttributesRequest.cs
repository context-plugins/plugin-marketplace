namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessGetAttributes operation.
/// </summary>
public sealed record MiscGoogleBusinessGetAttributesRequest
{
    public required string TeamId { get; init; }
}
