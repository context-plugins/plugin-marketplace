using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record Identifier
{
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    [JsonPropertyName("identifier")]
    public required string IdentifierValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
