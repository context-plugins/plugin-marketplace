using Clix.Models;

namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceStartLiveActivities operation.
/// </summary>
public sealed record ClixExternalServiceStartLiveActivitiesRequest
{
    /// <summary>
    /// Request body containing the live activities to start.
    /// </summary>
    public required V1StartLiveActivitiesRequest Body { get; init; }
}
