using System;
using BrowserUse.Models;

namespace BrowserUse.Requests.Sessions;

/// <summary>
/// The inputs of the UpdateSessionShareSessionsSessionIdSharePut operation.
/// </summary>
public sealed record UpdateSessionShareSessionsSessionIdSharePutRequest
{
    public required Guid SessionId { get; init; }

    public required SessionShareUpdateRequest Body { get; init; }
}
