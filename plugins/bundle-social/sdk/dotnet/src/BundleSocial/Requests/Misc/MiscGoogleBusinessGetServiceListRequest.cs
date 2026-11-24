namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessGetServiceList operation.
/// </summary>
public sealed record MiscGoogleBusinessGetServiceListRequest
{
    public required string TeamId { get; init; }
}
