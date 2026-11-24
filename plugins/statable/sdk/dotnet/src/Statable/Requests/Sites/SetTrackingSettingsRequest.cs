using Statable.Models;

namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the SetTrackingSettings operation.
/// </summary>
public sealed record SetTrackingSettingsRequest
{
    /// <summary>
    /// Numeric site id.
    /// </summary>
    public required long Id { get; init; }

    public required TrackingSettingsRequest Body { get; init; }
}
