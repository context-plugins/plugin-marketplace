using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the ListBuildsV2BuildsGet operation.
/// </summary>
public sealed record ListBuildsV2BuildsGetRequest
{
    /// <summary>
    /// Filter builds to this registry
    /// </summary>
    public required Guid RegistryId { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 50;
}
