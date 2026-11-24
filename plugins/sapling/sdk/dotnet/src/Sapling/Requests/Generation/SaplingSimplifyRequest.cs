using Sapling.Models.AnyOf;

namespace Sapling.Requests.Generation;

/// <summary>
/// The inputs of the SaplingSimplify operation.
/// </summary>
public sealed record SaplingSimplifyRequest
{
    public required ApiV1SimplifyRequest2 Body { get; init; }
}
