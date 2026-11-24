using System;

namespace CircleCi.Requests.ScheduleApi;

/// <summary>
/// The inputs of the GetSchedule operation.
/// </summary>
public sealed record GetScheduleRequest
{
    /// <summary>
    /// The unique identifier of the schedule
    /// </summary>
    public required Guid ScheduleId { get; init; }
}
