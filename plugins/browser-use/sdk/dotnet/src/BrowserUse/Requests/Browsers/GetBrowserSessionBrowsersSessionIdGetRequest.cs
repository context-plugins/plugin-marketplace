using System;

namespace BrowserUse.Requests.Browsers;

/// <summary>
/// The inputs of the GetBrowserSessionBrowsersSessionIdGet operation.
/// </summary>
public sealed record GetBrowserSessionBrowsersSessionIdGetRequest
{
    public required Guid SessionId { get; init; }
}
