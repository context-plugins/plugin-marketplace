namespace Fillo.Requests.Settings;

/// <summary>
/// The inputs of the UpdateFormSettings operation.
/// </summary>
public sealed record UpdateFormSettingsRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    public required object Body { get; init; }
}
