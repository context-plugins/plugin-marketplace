using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Create a subscription
/// </summary>
public record SubscriptionRequestDto
{
    /// <summary>
    /// Subscription name
    /// </summary>
    [JsonPropertyName("name")]
    [MinLength(1)]
    public required string Name { get; init; }

    [JsonPropertyName("status")]
    public required Status2 Status { get; init; }

    /// <summary>
    /// Subscription events information. You can retrieve event <c>type</c> and <c>version</c> with <c>GET /v3/events/catalog</c>.
    /// </summary>
    [JsonPropertyName("events")]
    [MinLength(1)]
    public required IReadOnlyList<SubscriptionEventDto> Events { get; init; }

    /// <summary>
    /// Event notification URL. The URL must be HTTPS. BILL uses this URL to send you event notifications.
    /// </summary>
    [JsonPropertyName("notificationUrl")]
    [MinLength(1)]
    public required string NotificationUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
