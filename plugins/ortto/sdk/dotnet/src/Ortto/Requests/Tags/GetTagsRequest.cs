using Ortto.Models;

namespace Ortto.Requests.Tags;

/// <summary>
/// The inputs of the GetTags operation.
/// </summary>
public sealed record GetTagsRequest
{
    public TagsGetRequest? Body { get; init; }
}
