using System.ComponentModel.DataAnnotations;

namespace Search1Api.Requests.Crawl;

/// <summary>
/// The inputs of the DeepcrawlStatus operation.
/// </summary>
public sealed record DeepcrawlStatusRequest
{
    [MinLength(1)]
    public required string TaskId { get; init; }
}
