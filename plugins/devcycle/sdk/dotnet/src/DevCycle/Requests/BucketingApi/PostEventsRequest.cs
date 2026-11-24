using DevCycle.Models;

namespace DevCycle.Requests.BucketingApi;

/// <summary>
/// The inputs of the PostEvents operation.
/// </summary>
public sealed record PostEventsRequest
{
    public required UserDataAndEventsBody Body { get; init; }
}
