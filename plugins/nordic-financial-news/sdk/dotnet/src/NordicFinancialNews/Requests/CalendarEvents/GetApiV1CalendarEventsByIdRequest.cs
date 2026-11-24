namespace NordicFinancialNews.Requests.CalendarEvents;

/// <summary>
/// The inputs of the GetApiV1CalendarEventsById operation.
/// </summary>
public sealed record GetApiV1CalendarEventsByIdRequest
{
    /// <summary>
    /// The calendar event ID, as returned in the <c>id</c> field of list responses.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if the event has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
