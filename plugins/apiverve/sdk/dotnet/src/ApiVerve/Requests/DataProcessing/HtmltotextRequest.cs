using ApiVerve.Models;

namespace ApiVerve.Requests.DataProcessing;

/// <summary>
/// The inputs of the Htmltotext operation.
/// </summary>
public sealed record HtmltotextRequest
{
    public required V1HtmltotextRequest Body { get; init; }
}
