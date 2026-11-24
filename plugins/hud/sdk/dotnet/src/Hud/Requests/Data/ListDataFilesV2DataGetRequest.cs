using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Requests.Data;

/// <summary>
/// The inputs of the ListDataFilesV2DataGet operation.
/// </summary>
public sealed record ListDataFilesV2DataGetRequest
{
    public Scope3 Scope { get; init; } = Scope3.All;

    public MembershipId? MembershipId { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    public int Offset { get; init; } = 0;
}
