namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscTiktokGetPostSettings operation.
/// </summary>
public sealed record MiscTiktokGetPostSettingsRequest
{
    public required string TeamId { get; init; }
}
