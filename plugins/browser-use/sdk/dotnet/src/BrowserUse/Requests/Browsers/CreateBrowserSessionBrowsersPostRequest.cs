using BrowserUse.Models;

namespace BrowserUse.Requests.Browsers;

/// <summary>
/// The inputs of the CreateBrowserSessionBrowsersPost operation.
/// </summary>
public sealed record CreateBrowserSessionBrowsersPostRequest
{
    public required CreateBrowserSessionRequest Body { get; init; }
}
