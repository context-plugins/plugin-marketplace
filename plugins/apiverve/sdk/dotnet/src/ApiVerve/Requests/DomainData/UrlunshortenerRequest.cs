using ApiVerve.Models;

namespace ApiVerve.Requests.DomainData;

/// <summary>
/// The inputs of the Urlunshortener operation.
/// </summary>
public sealed record UrlunshortenerRequest
{
    public required V1UrlunshortenerRequest Body { get; init; }
}
