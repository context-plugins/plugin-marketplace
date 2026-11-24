using System;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the ListSessionQueueSessionsSessionIdQueueGet operation.
/// </summary>
public sealed record ListSessionQueueSessionsSessionIdQueueGetRequest
{
    public required Guid SessionId { get; init; }
}
