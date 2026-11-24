using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1TasksGraphResponse
{
    [JsonPropertyName("root")]
    public required Root Root { get; init; }

    [JsonPropertyName("nodes")]
    public required IReadOnlyList<object> Nodes { get; init; }

    [JsonPropertyName("links")]
    public required IReadOnlyList<object> Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
