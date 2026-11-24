using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Markdowntopdf operation.
/// </summary>
public sealed record MarkdowntopdfRequest
{
    public required V1MarkdowntopdfRequest Body { get; init; }
}
