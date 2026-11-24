using System;

namespace CircleCi.Requests.ScheduleApi;

/// <summary>
/// The inputs of the DeleteSchedule operation.
/// </summary>
public sealed record DeleteScheduleRequest
{
    /// <summary>
    /// The unique identifier of the schedule
    /// </summary>
    public required Guid ScheduleId { get; init; }
}
