using Zillapi.Models.Enums;

namespace Zillapi.Requests.Buildings;

/// <summary>
/// The inputs of the GetBuildingByUrl operation.
/// </summary>
public sealed record GetBuildingByUrlRequest
{
    /// <summary>
    /// Building/apartments/community URL (must be /b/, /apartments/, or /community/).
    /// </summary>
    public required string Url { get; init; }

    /// <summary>
    /// Which units to include.
    /// </summary>
    public IncludeUnits IncludeUnits { get; init; } = IncludeUnits.All;

    /// <summary>
    /// When true (default) returns units synchronously. Set false for large buildings to run async and return a job_id.
    /// </summary>
    public bool Sync { get; init; } = true;
}
