using System;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the CreateSessionShareSessionsSessionIdSharePost operation.
/// </summary>
public sealed record CreateSessionShareSessionsSessionIdSharePostRequest
{
    public required Guid SessionId { get; init; }
}
