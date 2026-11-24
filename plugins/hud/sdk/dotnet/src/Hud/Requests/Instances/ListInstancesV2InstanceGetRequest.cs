using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.Instances;

/// <summary>
/// The inputs of the ListInstancesV2InstanceGet operation.
/// </summary>
public sealed record ListInstancesV2InstanceGetRequest
{
    /// <summary>
    /// Filter instances to this registry
    /// </summary>
    public required Guid RegistryId { get; init; }

    /// <summary>
    /// Include recently terminated instances
    /// </summary>
    public bool IncludeTerminated { get; init; } = false;

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;
}
