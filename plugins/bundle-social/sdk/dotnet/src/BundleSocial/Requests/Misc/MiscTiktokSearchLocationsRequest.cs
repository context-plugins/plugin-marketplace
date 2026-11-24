using System.ComponentModel.DataAnnotations;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscTiktokSearchLocations operation.
/// </summary>
public sealed record MiscTiktokSearchLocationsRequest
{
    public required string TeamId { get; init; }

    /// <summary>
    /// Free-text query used to search TikTok location tags.
    /// </summary>
    [StringLength(100, MinimumLength = 1)]
    public required string Q { get; init; }
}
