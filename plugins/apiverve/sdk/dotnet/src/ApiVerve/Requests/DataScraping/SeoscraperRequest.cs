using ApiVerve.Models;

namespace ApiVerve.Requests.DataScraping;

/// <summary>
/// The inputs of the Seoscraper operation.
/// </summary>
public sealed record SeoscraperRequest
{
    public required V1SeoscraperRequest Body { get; init; }
}
