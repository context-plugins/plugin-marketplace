using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Markdowntoimage operation.
/// </summary>
public sealed record MarkdowntoimageRequest
{
    public required V1MarkdowntoimageRequest Body { get; init; }
}
