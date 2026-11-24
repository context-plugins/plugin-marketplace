using System;
using CircleCi.Models;

namespace CircleCi.Requests.ScheduleApi;

/// <summary>
/// The inputs of the UpdateSchedule operation.
/// </summary>
public sealed record UpdateScheduleOperationRequest
{
    /// <summary>
    /// The unique identifier of the schedule
    /// </summary>
    public required Guid ScheduleId { get; init; }

    public required UpdateScheduleRequest Body { get; init; }
}
