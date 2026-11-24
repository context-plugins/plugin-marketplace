using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record UnsupportedReference
{
    [JsonPropertyName("nodeKey")]
    public required string NodeKey { get; init; }

    [JsonPropertyName("kind")]
    public required KindDoiTCloudFlowApi Kind { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public string? Detail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
