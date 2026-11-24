using ApiVerve.Models;

namespace ApiVerve.Requests.DataScraping;

/// <summary>
/// The inputs of the Webimagescraper operation.
/// </summary>
public sealed record WebimagescraperRequest
{
    public required V1WebimagescraperRequest Body { get; init; }
}
