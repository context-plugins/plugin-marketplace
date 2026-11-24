using S1.Models;

namespace S1.Requests.Crawl;

/// <summary>
/// The inputs of the Extract operation.
/// </summary>
public sealed record ExtractOperationRequest
{
    public required ExtractRequest Body { get; init; }
}
