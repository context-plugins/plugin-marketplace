using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.SearchFilterV2;

/// <summary>
/// The inputs of the GetFilterSearchIosAppsQueryPost2 operation.
/// </summary>
public sealed record GetFilterSearchIosAppsQueryPost2Request
{
    public IosAppSearchBody? Body { get; init; }
}
