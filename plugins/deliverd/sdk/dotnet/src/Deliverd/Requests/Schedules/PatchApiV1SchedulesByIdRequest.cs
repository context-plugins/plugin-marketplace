using Deliverd.Models;

namespace Deliverd.Requests.Schedules;

/// <summary>
/// The inputs of the PatchApiV1SchedulesById operation.
/// </summary>
public sealed record PatchApiV1SchedulesByIdRequest
{
    public required string Id { get; init; }

    public ApiV1SchedulesRequest1? Body { get; init; }
}
