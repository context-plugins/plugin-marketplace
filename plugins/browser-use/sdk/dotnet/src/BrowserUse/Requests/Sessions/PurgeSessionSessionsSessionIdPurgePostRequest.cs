using System;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the PurgeSessionSessionsSessionIdPurgePost operation.
/// </summary>
public sealed record PurgeSessionSessionsSessionIdPurgePostRequest
{
    public required Guid SessionId { get; init; }
}
