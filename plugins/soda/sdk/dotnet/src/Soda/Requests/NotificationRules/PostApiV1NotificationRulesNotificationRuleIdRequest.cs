using Soda.Models;

namespace Soda.Requests.NotificationRules;

/// <summary>
/// The inputs of the PostApiV1NotificationRulesNotificationRuleId operation.
/// </summary>
public sealed record PostApiV1NotificationRulesNotificationRuleIdRequest
{
    public required string NotificationRuleId { get; init; }

    public required PublicApiNotificationRuleRequestDto Body { get; init; }
}
