namespace Givebutter.Requests.WebhookActivities;

/// <summary>
/// The inputs of the WebhooksActivitiesShow operation.
/// </summary>
public sealed record WebhooksActivitiesShowRequest
{
    /// <summary>
    /// The webhook ID
    /// </summary>
    public required string Webhook { get; init; }

    /// <summary>
    /// The activity ID
    /// </summary>
    public required string Activity { get; init; }
}
