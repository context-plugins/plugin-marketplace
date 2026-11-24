namespace MicrosoftDynamicsNav.Requests.Notifications;

/// <summary>
/// The inputs of the ListNotificationRecipients operation.
/// </summary>
public sealed record ListNotificationRecipientsRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";

    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }
}
