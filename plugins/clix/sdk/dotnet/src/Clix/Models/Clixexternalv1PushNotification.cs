using System.Text.Json.Serialization;
using Clix.Core.Models;
using Clix.Models.AnyOf;

namespace Clix.Models;

/// <summary>
/// A push notification to be sent to a user device.
/// </summary>
public record Clixexternalv1PushNotification
{
    /// <summary>
    /// Target device and/or user for the push notification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    public Clixexternalv1PushNotificationTarget3? Target { get; init; }

    /// <summary>
    /// Title of the push notification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Body content of the push notification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public string? Body { get; init; }

    /// <summary>
    /// URL of the image to display in the push notification (optional).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image_url")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// URL to open when the notification is clicked (optional).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("landing_url")]
    public string? LandingUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
