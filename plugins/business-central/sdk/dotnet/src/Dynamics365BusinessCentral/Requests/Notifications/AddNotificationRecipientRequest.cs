using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.Notifications;

/// <summary>
/// The inputs of the AddNotificationRecipient operation.
/// </summary>
public sealed record AddNotificationRecipientRequest
{
    /// <summary>
    /// The application family (e.g., BusinessCentral)
    /// </summary>
    public string ApplicationFamily { get; init; } = "BusinessCentral";

    /// <summary>
    /// The name of the environment
    /// </summary>
    public required string EnvironmentName { get; init; }

    public required NotificationRecipient Body { get; init; }
}
