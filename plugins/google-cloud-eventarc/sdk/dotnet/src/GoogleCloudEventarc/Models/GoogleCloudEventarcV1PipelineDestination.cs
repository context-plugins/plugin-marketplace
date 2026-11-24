using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Represents a target of an invocation over HTTP.
/// </summary>
public record GoogleCloudEventarcV1PipelineDestination
{
    /// <summary>
    /// Optional. The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the Pipeline. Format: <c>projects/{project}/locations/{location}/workflows/{workflow}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow")]
    public string? Workflow { get; init; }

    /// <summary>
    /// Optional. Network config is used to configure how Pipeline resolves and connects to a destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkConfig")]
    public GoogleCloudEventarcV1PipelineDestinationNetworkConfig2? NetworkConfig { get; init; }

    /// <summary>
    /// Optional. An HTTP endpoint destination described by an URI. If a DNS FQDN is provided as the endpoint, Pipeline will create a peering zone to the consumer VPC and forward DNS requests to the VPC specified by network config to resolve the service endpoint. See: https://cloud.google.com/dns/docs/zones/zones-overview#peering_zones
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpEndpoint")]
    public GoogleCloudEventarcV1PipelineDestinationHttpEndpoint1? HttpEndpoint { get; init; }

    /// <summary>
    /// Optional. The resource name of the Message Bus to which events should be published. The Message Bus resource should exist in the same project as the Pipeline. Format: <c>projects/{project}/locations/{location}/messageBuses/{message_bus}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messageBus")]
    public string? MessageBus { get; init; }

    /// <summary>
    /// Optional. An authentication config used to authenticate message requests, such that destinations can verify the source. For example, this can be used with private Google Cloud destinations that require Google Cloud credentials for access like Cloud Run. This field is optional and should be set only by users interested in authenticated push.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authenticationConfig")]
    public GoogleCloudEventarcV1PipelineDestinationAuthenticationConfig2? AuthenticationConfig { get; init; }

    /// <summary>
    /// Optional. The message format before it is delivered to the destination. If not set, the message will be delivered in the format it was originally delivered to the Pipeline. This field can only be set if Pipeline.input_payload_format is also set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputPayloadFormat")]
    public GoogleCloudEventarcV1PipelineMessagePayloadFormat3? OutputPayloadFormat { get; init; }

    /// <summary>
    /// Optional. The resource name of the Pub/Sub topic to which events should be published. Format: <c>projects/{project}/locations/{location}/topics/{topic}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topic")]
    public string? Topic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
