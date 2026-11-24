using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Represents the format of message data.
/// </summary>
public record GoogleCloudEventarcV1PipelineMessagePayloadFormat
{
    /// <summary>
    /// Optional. Protobuf format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protobuf")]
    public GoogleCloudEventarcV1PipelineMessagePayloadFormatProtobufFormat2? Protobuf { get; init; }

    /// <summary>
    /// Optional. Avro format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avro")]
    public GoogleCloudEventarcV1PipelineMessagePayloadFormatAvroFormat1? Avro { get; init; }

    /// <summary>
    /// Optional. JSON format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("json")]
    public object? Json { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
