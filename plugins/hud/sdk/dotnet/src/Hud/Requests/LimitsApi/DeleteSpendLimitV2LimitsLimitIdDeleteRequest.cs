using System;

namespace Hud.Requests.LimitsApi;

/// <summary>
/// The inputs of the DeleteSpendLimitV2LimitsLimitIdDelete operation.
/// </summary>
public sealed record DeleteSpendLimitV2LimitsLimitIdDeleteRequest
{
    public required Guid LimitId { get; init; }
}
