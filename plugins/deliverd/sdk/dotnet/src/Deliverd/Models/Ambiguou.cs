using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Ambiguou
{
    [JsonPropertyName("phrase")]
    public required string Phrase { get; init; }

    [JsonPropertyName("candidates")]
    public required IReadOnlyList<Candidate> Candidates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
