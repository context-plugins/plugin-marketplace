using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Urltomarkdown operation.
/// </summary>
public sealed record UrltomarkdownRequest
{
    public required V1UrltomarkdownRequest Body { get; init; }
}
