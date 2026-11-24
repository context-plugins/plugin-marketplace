using BrowserUse.Core.Validation.Attributes;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Requests.Browsers;

/// <summary>
/// The inputs of the ListBrowserSessionsBrowsersGet operation.
/// </summary>
public sealed record ListBrowserSessionsBrowsersGetRequest
{
    /// <summary>
    /// Only browsers tagged with every one of these terms. <c>key</c> matches any value; <c>key=value</c> matches exactly. Repeat the param to require more than one (AND).
    /// </summary>
    public Metadata1? Metadata { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int PageSize { get; init; } = 10;

    [Minimum(1)]
    public int PageNumber { get; init; } = 1;

    public Filterby? FilterBy { get; init; }

    public AgentsessionidModel? AgentSessionId { get; init; }
}
