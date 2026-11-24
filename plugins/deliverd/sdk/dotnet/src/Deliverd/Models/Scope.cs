using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Scope
{
    [JsonPropertyName("destination")]
    public required Destination1? Destination { get; init; }

    [JsonPropertyName("recipientScope")]
    public required RecipientScope? RecipientScope { get; init; }

    [JsonPropertyName("classification")]
    public required Classification1? Classification { get; init; }

    [JsonPropertyName("risk")]
    public required Risk? Risk { get; init; }

    [JsonPropertyName("artifact")]
    public required Artifact1? Artifact { get; init; }

    [JsonPropertyName("digest")]
    public required string? Digest { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
