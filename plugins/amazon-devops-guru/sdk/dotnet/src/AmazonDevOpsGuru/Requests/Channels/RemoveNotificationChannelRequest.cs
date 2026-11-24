namespace AmazonDevOpsGuru.Requests.Channels;

/// <summary>
/// The inputs of the RemoveNotificationChannel operation.
/// </summary>
public sealed record RemoveNotificationChannelRequest
{
    /// <summary>
    /// The ID of the notification channel to be removed.
    /// </summary>
    public required string Id { get; init; }
}
