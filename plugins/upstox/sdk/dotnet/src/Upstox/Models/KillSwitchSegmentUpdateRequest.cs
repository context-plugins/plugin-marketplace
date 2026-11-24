using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

public record KillSwitchSegmentUpdateRequest
{
    [JsonPropertyName("segment")]
    public required Segment Segment { get; init; }

    [JsonPropertyName("action")]
    public required ActionEnum Action { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
