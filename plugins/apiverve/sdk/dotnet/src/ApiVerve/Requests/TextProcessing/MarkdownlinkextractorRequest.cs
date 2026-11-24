using ApiVerve.Models;

namespace ApiVerve.Requests.TextProcessing;

/// <summary>
/// The inputs of the Markdownlinkextractor operation.
/// </summary>
public sealed record MarkdownlinkextractorRequest
{
    public required V1MarkdownlinkextractorRequest Body { get; init; }
}
