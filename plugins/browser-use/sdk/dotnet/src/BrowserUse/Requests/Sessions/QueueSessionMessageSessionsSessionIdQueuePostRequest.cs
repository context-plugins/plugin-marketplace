using System;
using BrowserUse.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the QueueSessionMessageSessionsSessionIdQueuePost operation.
/// </summary>
public sealed record QueueSessionMessageSessionsSessionIdQueuePostRequest
{
    public required Guid SessionId { get; init; }

    public XV4QueueDeduplicate? XV4QueueDeduplicate { get; init; }

    public required QueueMessageRequest Body { get; init; }
}
