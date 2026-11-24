using ApiVerve.Models;

namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Sitemapgenerator operation.
/// </summary>
public sealed record SitemapgeneratorRequest
{
    public required V1SitemapgeneratorRequest Body { get; init; }
}
