namespace Givebutter.Requests.ContactActivities;

/// <summary>
/// The inputs of the ContactsActivitiesDestroy operation.
/// </summary>
public sealed record ContactsActivitiesDestroyRequest
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
