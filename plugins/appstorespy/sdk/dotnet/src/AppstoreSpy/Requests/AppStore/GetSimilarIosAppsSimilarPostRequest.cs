using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetSimilarIosAppsSimilarPost operation.
/// </summary>
public sealed record GetSimilarIosAppsSimilarPostRequest
{
    public IosSimilarSearchBody? Body { get; init; }
}
