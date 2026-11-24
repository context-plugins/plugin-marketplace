using Clix.Models;

namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceSendPushNotifications operation.
/// </summary>
public sealed record ClixExternalServiceSendPushNotificationsRequest
{
    /// <summary>
    /// Request body containing the push notifications to send.
    /// </summary>
    public required V1SendPushNotificationsRequest Body { get; init; }
}
