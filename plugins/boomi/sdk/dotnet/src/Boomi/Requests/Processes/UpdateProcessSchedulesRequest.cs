using Boomi.Models;

namespace Boomi.Requests.Processes;

/// <summary>
/// The inputs of the UpdateProcessSchedules operation.
/// </summary>
public sealed record UpdateProcessSchedulesRequest
{
    /// <summary>
    /// Unique identifier of the platform object.
    /// </summary>
    public required string Id { get; init; }

    public required ProcessSchedules Body { get; init; }
}
