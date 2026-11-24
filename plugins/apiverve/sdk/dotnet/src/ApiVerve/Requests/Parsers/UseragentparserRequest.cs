using ApiVerve.Models;

namespace ApiVerve.Requests.Parsers;

/// <summary>
/// The inputs of the Useragentparser operation.
/// </summary>
public sealed record UseragentparserRequest
{
    public required V1UseragentparserRequest Body { get; init; }
}
