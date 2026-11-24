using ApiVerve.Models;

namespace ApiVerve.Requests.DataScraping;

/// <summary>
/// The inputs of the Linkscraper operation.
/// </summary>
public sealed record LinkscraperRequest
{
    public required V1LinkscraperRequest Body { get; init; }
}
