namespace Givebutter.Requests.WebhookActivities;

/// <summary>
/// The inputs of the WebhooksActivitiesIndex operation.
/// </summary>
public sealed record WebhooksActivitiesIndexRequest
{
    /// <summary>
    /// The webhook ID
    /// </summary>
    public required string Webhook { get; init; }
}
