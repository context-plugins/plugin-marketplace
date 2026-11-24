using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record EnumSchema
{
    [JsonPropertyName("allowedValues")]
    public required IReadOnlyList<AllowedValue> AllowedValues { get; init; }

    [JsonPropertyName("allowAdditionalValues")]
    public required bool AllowAdditionalValues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
