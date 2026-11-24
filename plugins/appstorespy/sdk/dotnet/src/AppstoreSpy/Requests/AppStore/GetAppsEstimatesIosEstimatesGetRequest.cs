using System;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetAppsEstimatesIosEstimatesGet operation.
/// </summary>
public sealed record GetAppsEstimatesIosEstimatesGetRequest
{
    /// <summary>
    /// App Store app ids separated by comma(,). Each id is the numeric id (447188370), the id as the store shows it (id447188370) or an App Store link (https://apps.apple.com/us/app/name/id447188370, URL-encoded); whitespace around an id is ignored, and an empty or unrecognised id answers 422
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
}
