using System;
using BrowserUse.Models;

namespace BrowserUse.Requests.Browsers;

/// <summary>
/// The inputs of the UpdateBrowserSessionBrowsersSessionIdPatch operation.
/// </summary>
public sealed record UpdateBrowserSessionBrowsersSessionIdPatchRequest
{
    public required Guid SessionId { get; init; }

    public required UpdateBrowserSessionRequest Body { get; init; }
}
