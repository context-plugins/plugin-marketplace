namespace Boomi.Requests.Processes;

/// <summary>
/// The inputs of the GetProcessSchedules operation.
/// </summary>
public sealed record GetProcessSchedulesRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }
}
