using Sapling.Models.AnyOf;

namespace Sapling.Requests.Generation;

/// <summary>
/// The inputs of the SaplingSummarize operation.
/// </summary>
public sealed record SaplingSummarizeRequest
{
    public required ApiV1SummarizeRequest2 Body { get; init; }
}
