using System;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the DeleteSessionSessionsSessionIdDelete operation.
/// </summary>
public sealed record DeleteSessionSessionsSessionIdDeleteRequest
{
    public required Guid SessionId { get; init; }
}
