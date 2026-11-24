using System.Collections.Generic;
using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record V1CreateEventsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<V1Event>? Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
