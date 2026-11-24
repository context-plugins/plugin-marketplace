using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Htmlentities operation.
/// </summary>
public sealed record HtmlentitiesRequest
{
    public required V1HtmlentitiesRequest Body { get; init; }
}
