using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record PropertySchema
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemaType")]
    public SchemaType? SchemaType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required")]
    public bool? Required { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enumSchema")]
    public EnumSchema? EnumSchema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
