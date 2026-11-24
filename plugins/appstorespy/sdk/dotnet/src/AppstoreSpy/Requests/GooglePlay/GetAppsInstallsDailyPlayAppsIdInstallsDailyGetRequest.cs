using System;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetAppsInstallsDailyPlayAppsIdInstallsDailyGet operation.
/// </summary>
public sealed record GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest
{
    /// <summary>
    /// Google Play bundle ids separated by comma(,), e.g. com.example.app. A store link cannot be passed in the path; pass the <c>id</c> value from it. An unrecognised id answers 422
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Start date. Format YYYY-MM-DD. Defaults to the 30 days ending at <c>end</c>
    /// </summary>
    public DateTimeOffset? Start { get; init; }

    /// <summary>
    /// End date. Format YYYY-MM-DD
    /// </summary>
    public DateTimeOffset? End { get; init; }

    /// <summary>
    /// Return <c>ipd</c> smoothed as on the website chart
    /// </summary>
    public bool Smooth { get; init; } = false;
}
