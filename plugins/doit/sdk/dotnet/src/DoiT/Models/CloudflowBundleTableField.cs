using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CloudflowBundleTableField
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("dataType")]
    public required string DataType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isUnique")]
    public bool? IsUnique { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
