using System.Collections.Generic;
using System.Text.Json.Serialization;
using ForceDream.Core.Models;

namespace ForceDream.Models;

public record ReliabilityListResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agents")]
    public IReadOnlyList<Agent1>? Agents { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
