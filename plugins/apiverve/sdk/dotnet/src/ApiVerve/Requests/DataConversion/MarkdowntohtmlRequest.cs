using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Markdowntohtml operation.
/// </summary>
public sealed record MarkdowntohtmlRequest
{
    public required V1MarkdowntohtmlRequest Body { get; init; }
}
