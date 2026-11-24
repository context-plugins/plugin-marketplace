using System.Collections.Generic;
using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record ApiV1WholesaleStatesResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("states")]
    public IReadOnlyList<State>? States { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
