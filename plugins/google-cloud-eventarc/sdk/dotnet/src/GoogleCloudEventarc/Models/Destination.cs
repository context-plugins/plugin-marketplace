using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Represents a target of an invocation over HTTP.
/// </summary>
public record Destination
{
    /// <summary>
    /// A GKE service capable of receiving events. The service should be running in the same project as the trigger.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gke")]
    public Gke2? Gke { get; init; }

    /// <summary>
    /// Optional. Network config is used to configure how Eventarc resolves and connect to a destination. This should only be used with HttpEndpoint destination type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("networkConfig")]
    public NetworkConfig2? NetworkConfig { get; init; }

    /// <summary>
    /// Cloud Run fully-managed resource that receives the events. The resource should be in the same project as the trigger.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudRun")]
    public CloudRun2? CloudRun { get; init; }

    /// <summary>
    /// An HTTP endpoint destination described by an URI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpEndpoint")]
    public HttpEndpoint2? HttpEndpoint { get; init; }

    /// <summary>
    /// The Cloud Function resource name. Cloud Functions V1 and V2 are supported. Format: <c>projects/{project}/locations/{location}/functions/{function}</c> This is a read-only field. Creating Cloud Functions V1/V2 triggers is only supported via the Cloud Functions product. An error will be returned if the user sets this value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudFunction")]
    public string? CloudFunction { get; init; }

    /// <summary>
    /// The resource name of the Workflow whose Executions are triggered by the events. The Workflow resource should be deployed in the same project as the trigger. Format: <c>projects/{project}/locations/{location}/workflows/{workflow}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow")]
    public string? Workflow { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
