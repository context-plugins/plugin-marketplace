namespace Deliverd.Requests.Schedules;

/// <summary>
/// The inputs of the DeleteApiV1SchedulesById operation.
/// </summary>
public sealed record DeleteApiV1SchedulesByIdRequest
{
    public required string Id { get; init; }
}
