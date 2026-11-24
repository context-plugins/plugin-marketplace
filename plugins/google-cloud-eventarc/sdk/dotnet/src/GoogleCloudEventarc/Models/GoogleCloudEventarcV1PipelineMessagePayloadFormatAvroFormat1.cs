using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. Avro format.
/// </summary>
public record GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1
{
    /// <summary>
    /// Optional. The entire schema definition is stored in this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemaDefinition")]
    public string? SchemaDefinition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
