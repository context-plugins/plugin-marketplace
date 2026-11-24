using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

public record QueueListResponse
{
    [JsonPropertyName("queue")]
    public required IReadOnlyList<QueuedMessage> Queue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("steeringCutoffs")]
    public IReadOnlyList<SteeringCutoff>? SteeringCutoffs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
