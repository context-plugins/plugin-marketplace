using System;
using Hud.Models;

namespace Hud.Requests.LimitsApi;

/// <summary>
/// The inputs of the UpdateSpendLimitV2LimitsLimitIdPatch operation.
/// </summary>
public sealed record UpdateSpendLimitV2LimitsLimitIdPatchRequest
{
    public required Guid LimitId { get; init; }

    public required SpendLimitUpdateRequest Body { get; init; }
}
