namespace Soda.Requests.NotificationRules;

/// <summary>
/// The inputs of the GetApiV1NotificationRules operation.
/// </summary>
public sealed record GetApiV1NotificationRulesRequest
{
    public int? Page { get; init; }

    public int? Size { get; init; }
}
