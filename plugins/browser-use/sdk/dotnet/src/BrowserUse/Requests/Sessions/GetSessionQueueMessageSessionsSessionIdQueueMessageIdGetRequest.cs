using System;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the GetSessionQueueMessageSessionsSessionIdQueueMessageIdGet operation.
/// </summary>
public sealed record GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest
{
    public required Guid SessionId { get; init; }

    public required int MessageId { get; init; }
}
