using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Transition
{
    [JsonPropertyName("from")]
    public required From From { get; init; }

    [JsonPropertyName("to")]
    public required To To { get; init; }

    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
