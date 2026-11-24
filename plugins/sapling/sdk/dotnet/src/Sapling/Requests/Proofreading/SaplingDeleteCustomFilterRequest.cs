using System;

namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingDeleteCustomFilter operation.
/// </summary>
public sealed record SaplingDeleteCustomFilterRequest
{
    /// <summary>
    /// Custom filter id.
    /// </summary>
    public required Guid FilterId { get; init; }

    public bool ReturnUsage { get; init; } = false;
}
