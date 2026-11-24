using Soda.Models;

namespace Soda.Requests.NotificationRules;

/// <summary>
/// The inputs of the PostApiV1NotificationRules operation.
/// </summary>
public sealed record PostApiV1NotificationRulesRequest
{
    public required PublicApiNotificationRuleRequestDto Body { get; init; }
}
