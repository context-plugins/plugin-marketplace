using System.Text.Json.Serialization;
using Semrush.Core.Models;

namespace Semrush.Models;

/// <summary>
/// Action notification details
/// </summary>
public record ActionNotification
{
    /// <summary>
    /// Sending channel
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channel")]
    public string? Channel { get; init; }

    /// <summary>
    /// ID of subscription
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_id")]
    public int? SubscriptionId { get; init; }

    /// <summary>
    /// ID of subscriber
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipient_id")]
    public int? RecipientId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
