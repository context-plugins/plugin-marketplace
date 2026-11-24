using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record AudiencePatchDto
{
    [JsonPropertyName("instructions")]
    public required IReadOnlyList<AudiencePatchInstructionsDto> Instructions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
