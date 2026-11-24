namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the GetTrackingSettings operation.
/// </summary>
public sealed record GetTrackingSettingsRequest
{
    /// <summary>
    /// Numeric site id.
    /// </summary>
    public required long Id { get; init; }
}
