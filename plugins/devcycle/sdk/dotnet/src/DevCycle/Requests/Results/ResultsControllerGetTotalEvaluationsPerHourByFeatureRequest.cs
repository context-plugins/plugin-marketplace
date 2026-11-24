using DevCycle.Models.Enums;

namespace DevCycle.Requests.Results;

/// <summary>
/// The inputs of the ResultsControllerGetTotalEvaluationsPerHourByFeature operation.
/// </summary>
public sealed record ResultsControllerGetTotalEvaluationsPerHourByFeatureRequest
{
    /// <summary>
    /// A Feature key or ID
    /// </summary>
    public required string Feature { get; init; }

    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public double? StartDate { get; init; }

    public double? EndDate { get; init; }

    public string? Platform { get; init; }

    public string? Variable { get; init; }

    /// <summary>
    /// A Environment key or ID
    /// </summary>
    public string? Environment { get; init; }

    public Period? Period { get; init; }

    /// <summary>
    /// SDK type to filter evaluation results by
    /// </summary>
    public SdkTypeDevCycleManagementResultsApi? SdkType { get; init; }
}
