using GoogleSearchConsole.Models;

namespace GoogleSearchConsole.Requests.UrlInspection;

/// <summary>
/// The inputs of the SearchconsoleUrlInspectionIndexInspect operation.
/// </summary>
public sealed record SearchconsoleUrlInspectionIndexInspectRequest
{
    public required InspectUrlIndexRequest Body { get; init; }
}
