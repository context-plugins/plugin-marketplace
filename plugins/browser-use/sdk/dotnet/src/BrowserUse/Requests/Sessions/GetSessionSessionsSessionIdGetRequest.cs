using System;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the GetSessionSessionsSessionIdGet operation.
/// </summary>
public sealed record GetSessionSessionsSessionIdGetRequest
{
    public required Guid SessionId { get; init; }
}
