using CodeQr.Models;

namespace CodeQr.Requests.Tags;

/// <summary>
/// The inputs of the UpdateTag operation.
/// </summary>
public sealed record UpdateTagRequest
{
    /// <summary>
    /// The ID of the tag to update.
    /// </summary>
    public required string Id { get; init; }

    public TagsRequest1? Body { get; init; }
}
