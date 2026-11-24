namespace Basiq.Requests.Events;

/// <summary>
/// The inputs of the GetEvents operation.
/// </summary>
public sealed record GetEventsRequest
{
    /// <summary>
    /// Retrieves the details of all events associated with a user.
    /// <para>
    /// <b>Note:</b> This endpoint only returns events that happened in the last 7 days.
    /// </para>
    /// <para>
    /// <b>Filtering Options:</b>
    /// - <c>userId</c>: User ID for the specific user you wish to retrieve events for. e.g., <c>user.id.eq(userId)</c>
    /// - <c>entity</c>: Filter events by entity type. e.g., <c>event.entity.eq(entity)</c>
    /// - <c>type</c>: Filter events by event type. e.g., <c>event.type.eq(type)</c>
    /// </para>
    /// </summary>
    public string? Filter { get; init; }
}
