using Search1Api.Models;

namespace Search1Api.Requests.Crawl;

/// <summary>
/// The inputs of the Extract operation.
/// </summary>
public sealed record ExtractOperationRequest
{
    public required ExtractRequest Body { get; init; }
}
