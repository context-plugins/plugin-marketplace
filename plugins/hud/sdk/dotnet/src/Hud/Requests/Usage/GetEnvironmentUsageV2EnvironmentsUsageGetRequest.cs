using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Requests.Usage;

/// <summary>
/// The inputs of the GetEnvironmentUsageV2EnvironmentsUsageGet operation.
/// </summary>
public sealed record GetEnvironmentUsageV2EnvironmentsUsageGetRequest
{
    [Minimum(1)]
    [Maximum(365)]
    public int Days { get; init; } = 7;

    public UserId? UserId { get; init; }

    public ApiKeyId? ApiKeyId { get; init; }

    public StatusHudPlatformInstancesApi? Status { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;
}
