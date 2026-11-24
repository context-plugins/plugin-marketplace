using Ortto.Models;

namespace Ortto.Requests.Activities;

/// <summary>
/// The inputs of the CreateActivities operation.
/// </summary>
public sealed record CreateActivitiesRequest
{
    public required ActivitiesCreateRequest Body { get; init; }
}
