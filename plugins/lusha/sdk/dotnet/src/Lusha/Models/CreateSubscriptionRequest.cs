using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CreateSubscriptionRequest
{
    [JsonPropertyName("defaults")]
    public required Defaults Defaults { get; init; }

    /// <summary>
    /// Default subscription name prefix
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(100)]
    public string? Name { get; init; }

    /// <summary>
    /// Array of subscriptions to create (max 25)
    /// </summary>
    [JsonPropertyName("subscriptions")]
    [MinLength(1)]
    [MaxLength(25)]
    public required IReadOnlyList<Subscription1> Subscriptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
