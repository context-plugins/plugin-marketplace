using System.Collections.Generic;
using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record V1CreateEventsRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events")]
    public IReadOnlyList<CreateEventsRequestEventForRequest>? Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
