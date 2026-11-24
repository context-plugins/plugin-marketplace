using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record OrderMetadata
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latency")]
    public long? Latency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
