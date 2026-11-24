using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Unicodeescape operation.
/// </summary>
public sealed record UnicodeescapeRequest
{
    public required V1UnicodeescapeRequest Body { get; init; }
}
