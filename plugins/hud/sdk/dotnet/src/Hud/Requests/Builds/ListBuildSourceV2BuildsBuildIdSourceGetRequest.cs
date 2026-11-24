using System;
using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Requests.Builds;

/// <summary>
/// The inputs of the ListBuildSourceV2BuildsBuildIdSourceGet operation.
/// </summary>
public sealed record ListBuildSourceV2BuildsBuildIdSourceGetRequest
{
    public required Guid BuildId { get; init; }

    public string Path { get; init; } = "";

    public Cursor? Cursor { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 100;
}
