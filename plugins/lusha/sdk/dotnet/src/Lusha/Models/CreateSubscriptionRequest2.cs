using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CreateSubscriptionRequest2
{
    [JsonPropertyName("defaults")]
    public required Defaults1 Defaults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(100)]
    public string? Name { get; init; }

    [JsonPropertyName("subscriptions")]
    [MinLength(1)]
    [MaxLength(25)]
    public required IReadOnlyList<Subscription2> Subscriptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
