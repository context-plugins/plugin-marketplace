using AppstoreSpy.Models;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetSimilarPlayAppsSimilarPost operation.
/// </summary>
public sealed record GetSimilarPlayAppsSimilarPostRequest
{
    public SimilarSearchBody? Body { get; init; }
}
