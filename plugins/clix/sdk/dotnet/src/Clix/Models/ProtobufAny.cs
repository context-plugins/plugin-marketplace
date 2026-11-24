using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record ProtobufAny
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("@type")]
    public string? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties<object> AdditionalProperties { get; init; } = [];
}
