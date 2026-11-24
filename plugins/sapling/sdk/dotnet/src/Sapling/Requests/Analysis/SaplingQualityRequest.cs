using Sapling.Models.AnyOf;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingQuality operation.
/// </summary>
public sealed record SaplingQualityRequest
{
    public required ApiV1QualityRequest2 Body { get; init; }
}
