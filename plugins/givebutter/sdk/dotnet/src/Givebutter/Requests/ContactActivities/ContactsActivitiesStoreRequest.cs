using Givebutter.Models;

namespace Givebutter.Requests.ContactActivities;

/// <summary>
/// The inputs of the ContactsActivitiesStore operation.
/// </summary>
public sealed record ContactsActivitiesStoreRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }

    public required StoreContactActivityRequest Body { get; init; }
}
