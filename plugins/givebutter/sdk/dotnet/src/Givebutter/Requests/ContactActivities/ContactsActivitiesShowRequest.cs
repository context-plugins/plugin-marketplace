namespace Givebutter.Requests.ContactActivities;

/// <summary>
/// The inputs of the ContactsActivitiesShow operation.
/// </summary>
public sealed record ContactsActivitiesShowRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }

    /// <summary>
    /// The activity ID
    /// </summary>
    public required int Activity { get; init; }
}
