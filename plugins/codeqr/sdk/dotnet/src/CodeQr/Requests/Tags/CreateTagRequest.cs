using CodeQr.Models;

namespace CodeQr.Requests.Tags;

/// <summary>
/// The inputs of the CreateTag operation.
/// </summary>
public sealed record CreateTagRequest
{
    public TagsRequest? Body { get; init; }
}
