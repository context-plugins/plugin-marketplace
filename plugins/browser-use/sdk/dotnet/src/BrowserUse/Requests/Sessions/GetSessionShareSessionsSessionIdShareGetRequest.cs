using System;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the GetSessionShareSessionsSessionIdShareGet operation.
/// </summary>
public sealed record GetSessionShareSessionsSessionIdShareGetRequest
{
    public required Guid SessionId { get; init; }
}
