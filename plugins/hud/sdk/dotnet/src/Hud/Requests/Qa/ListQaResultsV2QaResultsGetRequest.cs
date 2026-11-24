using Hud.Models.AnyOf;

namespace Hud.Requests.Qa;

/// <summary>
/// The inputs of the ListQaResultsV2QaResultsGet operation.
/// </summary>
public sealed record ListQaResultsV2QaResultsGetRequest
{
    public TraceIds? TraceIds { get; init; }

    public TaskIds? TaskIds { get; init; }

    public bool IncludeHistory { get; init; } = false;
}
