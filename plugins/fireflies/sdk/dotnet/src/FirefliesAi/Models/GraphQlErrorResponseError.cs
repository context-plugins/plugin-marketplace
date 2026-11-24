using System.Collections.Generic;
using System.Text.Json.Serialization;
using FirefliesAi.Core.Models;

namespace FirefliesAi.Models;

public record GraphQlErrorResponseError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<GraphQlError>? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
