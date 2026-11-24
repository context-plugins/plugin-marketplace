using Sapling.Models;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingAddCustomMapping operation.
/// </summary>
public sealed record SaplingAddCustomMappingRequest
{
    public required ApiV1CustomMappingRequest Body { get; init; }
}
