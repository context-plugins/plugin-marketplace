using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record RuleDeliverdDevPoliciesApi
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("priority")]
    public required double Priority { get; init; }

    [JsonPropertyName("effect")]
    public required Effect Effect { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
