namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookGetTokenDebug operation.
/// </summary>
public sealed record MiscFacebookGetTokenDebugRequest
{
    public required string TeamId { get; init; }
}
