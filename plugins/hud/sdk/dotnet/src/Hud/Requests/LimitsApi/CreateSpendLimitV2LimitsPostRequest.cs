using Hud.Models;

namespace Hud.Requests.LimitsApi;

/// <summary>
/// The inputs of the CreateSpendLimitV2LimitsPost operation.
/// </summary>
public sealed record CreateSpendLimitV2LimitsPostRequest
{
    public required SpendLimitCreateRequest Body { get; init; }
}
