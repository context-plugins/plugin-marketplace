using System.Collections.Generic;
using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

/// <summary>
/// Request schema for sending push notifications.
/// </summary>
public record V1SendPushNotificationsRequest
{
    /// <summary>
    /// List of push notifications to send. (We recommend sending up to 500 push notifications.)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("push_notifications")]
    public IReadOnlyList<Clixexternalv1PushNotification>? PushNotifications { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
