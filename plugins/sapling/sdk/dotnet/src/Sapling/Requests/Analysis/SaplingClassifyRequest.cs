using Sapling.Models.AnyOf;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingClassify operation.
/// </summary>
public sealed record SaplingClassifyRequest
{
    public required ApiV1ClassifyRequest2 Body { get; init; }
}
