using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record SubmitFeatureChangeRequestDto
{
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public required string Description { get; init; }

    [JsonPropertyName("reviewers")]
    public required IReadOnlyList<string> Reviewers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
