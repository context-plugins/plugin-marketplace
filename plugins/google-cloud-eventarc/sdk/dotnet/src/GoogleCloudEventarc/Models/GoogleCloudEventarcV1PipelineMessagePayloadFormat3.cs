using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. The message format before it is delivered to the destination. If not set, the message will be delivered in the format it was originally delivered to the Pipeline. This field can only be set if Pipeline.input_payload_format is also set.
/// </summary>
public record GoogleCloudEventarcV1PipelineMessagePayloadFormat3
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
