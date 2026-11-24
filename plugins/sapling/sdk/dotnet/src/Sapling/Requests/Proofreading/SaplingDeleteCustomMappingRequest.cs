using System;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingDeleteCustomMapping operation.
/// </summary>
public sealed record SaplingDeleteCustomMappingRequest
{
    /// <summary>
    /// Custom mapping id.
    /// </summary>
    public required Guid MappingId { get; init; }

    public bool ReturnUsage { get; init; } = false;
}
