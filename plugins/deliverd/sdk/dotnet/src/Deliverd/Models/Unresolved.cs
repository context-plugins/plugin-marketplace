using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Unresolved
{
    [JsonPropertyName("phrase")]
    public required string Phrase { get; init; }

    [JsonPropertyName("suggestion")]
    public required string Suggestion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
