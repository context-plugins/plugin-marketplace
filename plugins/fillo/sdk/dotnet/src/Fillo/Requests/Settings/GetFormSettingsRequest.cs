namespace Fillo.Requests.Settings;

/// <summary>
/// The inputs of the GetFormSettings operation.
/// </summary>
public sealed record GetFormSettingsRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }
}
