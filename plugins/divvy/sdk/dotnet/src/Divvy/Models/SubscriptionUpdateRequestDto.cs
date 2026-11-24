using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Update a subscription (name updated)
/// </summary>
public record SubscriptionUpdateRequestDto
{
    /// <summary>
    /// Subscription name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status2? Status { get; init; }

    /// <summary>
    /// Subscription events information. You can retrieve event <c>type</c> and <c>version</c> with <c>GET /v3/events/catalog</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<SubscriptionEventDto>? Events { get; init; }

    /// <summary>
    /// Event notification URL. The URL must be HTTPS. BILL uses this URL to send you event notifications.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notificationUrl")]
    public string? NotificationUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
