using System;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the CancelQueuedMessageSessionsSessionIdQueueMessageIdDelete operation.
/// </summary>
public sealed record CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest
{
    public required Guid SessionId { get; init; }

    public required int MessageId { get; init; }
}
