using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Markdowntable operation.
/// </summary>
public sealed record MarkdowntableRequest
{
    public required V1MarkdowntableRequest Body { get; init; }
}
