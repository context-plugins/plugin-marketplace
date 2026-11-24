using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record AudiencePatchInstructionsDto
{
    [JsonPropertyName("op")]
    public required Op Op { get; init; }

    [JsonPropertyName("action")]
    public required AudiencePatchAction Action { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
