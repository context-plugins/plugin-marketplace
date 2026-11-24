using Sapling.Models.AnyOf;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingInclusive operation.
/// </summary>
public sealed record SaplingInclusiveRequest
{
    public required ApiV1InclusiveRequest2 Body { get; init; }
}
