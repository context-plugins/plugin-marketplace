using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Htmltoimage operation.
/// </summary>
public sealed record HtmltoimageRequest
{
    public required V1HtmltoimageRequest Body { get; init; }
}
