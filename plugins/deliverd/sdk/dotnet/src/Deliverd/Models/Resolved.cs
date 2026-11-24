using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record Resolved
{
    [JsonPropertyName("phrase")]
    public required string Phrase { get; init; }

    [JsonPropertyName("principal")]
    public required Principal Principal { get; init; }

    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
