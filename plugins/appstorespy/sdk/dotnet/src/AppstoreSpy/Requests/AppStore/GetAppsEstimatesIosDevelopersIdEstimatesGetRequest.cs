using System;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetAppsEstimatesIosDevelopersIdEstimatesGet operation.
/// </summary>
public sealed record GetAppsEstimatesIosDevelopersIdEstimatesGetRequest
{
    /// <summary>
    /// Developer's ids to return separated by comma(,)
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Start date. Format YYYY-MM-DD
    /// </summary>
    public DateTimeOffset? Start { get; init; }

    /// <summary>
    /// Start date. Format YYYY-MM-DD
    /// </summary>
    public DateTimeOffset? End { get; init; }

    /// <summary>
    /// Return every month from the developer's earliest to its latest month with estimates within start..end, newest first: a month without estimates appears with downloads and revenue null, so a gap is not read as a zero. Off by default, which leaves such months out.
    /// </summary>
    public bool FillGaps { get; init; } = false;
}
