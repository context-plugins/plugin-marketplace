using ApiVerve.Models;

namespace ApiVerve.Requests.Documents;

/// <summary>
/// The inputs of the Htmltopdf operation.
/// </summary>
public sealed record HtmltopdfRequest
{
    public required V1HtmltopdfRequest Body { get; init; }
}
