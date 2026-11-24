using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetFilterSearchIosAppsQueryPost operation.
/// </summary>
public sealed record GetFilterSearchIosAppsQueryPostRequest
{
    public IosAppSearchBody? Body { get; init; }
}
