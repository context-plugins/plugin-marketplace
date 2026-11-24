using System;

namespace Hud.Requests.LimitsApi;

/// <summary>
/// The inputs of the ResetSpendLimitV2LimitsLimitIdResetPost operation.
/// </summary>
public sealed record ResetSpendLimitV2LimitsLimitIdResetPostRequest
{
    public required Guid LimitId { get; init; }
}
