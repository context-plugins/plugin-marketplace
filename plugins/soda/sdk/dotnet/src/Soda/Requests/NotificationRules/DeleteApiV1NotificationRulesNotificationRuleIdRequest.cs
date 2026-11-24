namespace Soda.Requests.NotificationRules;

/// <summary>
/// The inputs of the DeleteApiV1NotificationRulesNotificationRuleId operation.
/// </summary>
public sealed record DeleteApiV1NotificationRulesNotificationRuleIdRequest
{
    public required string NotificationRuleId { get; init; }
}
