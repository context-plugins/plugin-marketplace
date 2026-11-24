using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetFilterSearchPlayAppsQueryPost operation.
/// </summary>
public sealed record GetFilterSearchPlayAppsQueryPostRequest
{
    public PlayAppSearchBody? Body { get; init; }
}
