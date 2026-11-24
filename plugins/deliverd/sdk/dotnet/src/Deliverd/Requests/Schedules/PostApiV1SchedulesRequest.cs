using Deliverd.Models;

namespace Deliverd.Requests.Schedules;

/// <summary>
/// The inputs of the PostApiV1Schedules operation.
/// </summary>
public sealed record PostApiV1SchedulesRequest
{
    public ApiV1SchedulesRequest? Body { get; init; }
}
