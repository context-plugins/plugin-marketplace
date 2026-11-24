using Deliverd.Models.Enums;

namespace Deliverd.Requests.Schedules;

/// <summary>
/// The inputs of the GetApiV1Schedules operation.
/// </summary>
public sealed record GetApiV1SchedulesRequest
{
    /// <summary>
    /// Return only schedules waiting on a publish
    /// </summary>
    public Due? Due { get; init; }
}
