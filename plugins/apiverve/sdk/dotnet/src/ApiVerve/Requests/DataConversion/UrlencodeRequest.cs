using ApiVerve.Models;

namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Urlencode operation.
/// </summary>
public sealed record UrlencodeRequest
{
    public required V1UrlencodeRequest Body { get; init; }
}
