using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UserTurnSpecification
{
    [JsonPropertyName("input")]
    public required UserTurnInputSpecification Input { get; init; }

    [JsonPropertyName("expected")]
    public required UserTurnOutputSpecification Expected { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
