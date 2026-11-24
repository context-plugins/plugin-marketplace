using Sapling.Models;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingAddCustomFilter operation.
/// </summary>
public sealed record SaplingAddCustomFilterRequest
{
    public required ApiV1CustomFilterRequest Body { get; init; }
}
