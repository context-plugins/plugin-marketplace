using System;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetAppsEstimatesPlayEstimatesGet operation.
/// </summary>
public sealed record GetAppsEstimatesPlayEstimatesGetRequest
{
    /// <summary>
    /// Google Play app ids separated by comma(,). Each id is the bundle id (com.example.app) or a Google Play link (https://play.google.com/store/apps/details?id=com.example.app or market://details?id=com.example.app, URL-encoded); an unrecognised id or an id holding whitespace answers 422
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
