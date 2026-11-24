using Givebutter.Models.Enums;

namespace Givebutter.Requests.ContactActivities;

/// <summary>
/// The inputs of the ContactsActivitiesIndex operation.
/// </summary>
public sealed record ContactsActivitiesIndexRequest
{
    /// <summary>
    /// The contact ID
    /// </summary>
    public required int Contact { get; init; }

    public ContactActivityTypeEnum? Type { get; init; }
}
