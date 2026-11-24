using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. The payload format expected for the messages received by the Pipeline. If input_payload_format is set then any messages not matching this format will be treated as persistent errors. If input_payload_format is not set, then the message data will be treated as an opaque binary and no output format can be set on the Pipeline through the Pipeline.Destination.output_payload_format field. Any Mediations on the Pipeline that involve access to the data field will fail as persistent errors.
/// </summary>
public record GoogleCloudEventarcV1PipelineMessagePayloadFormat1
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
