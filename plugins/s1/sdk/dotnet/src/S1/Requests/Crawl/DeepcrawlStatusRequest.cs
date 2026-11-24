using System.ComponentModel.DataAnnotations;

namespace S1.Requests.Crawl;

/// <summary>
/// The inputs of the DeepcrawlStatus operation.
/// </summary>
public sealed record DeepcrawlStatusRequest
{
    [MinLength(1)]
    public required string TaskId { get; init; }
}
