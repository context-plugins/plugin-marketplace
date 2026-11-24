using System;
using BrowserUse.Core.Validation.Attributes;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Requests.Browsers;

/// <summary>
/// The inputs of the ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGet operation.
/// </summary>
public sealed record ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest
{
    public required Guid SessionId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    public Cursor? Cursor { get; init; }

    public bool IncludeUrls { get; init; } = false;
}
