using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1EnvironmentConfig
{
    /// <summary>
    /// Revision ID of the environment configuration. The higher the value, the more recently the configuration was deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// List of flow hooks in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flowhooks")]
    public IReadOnlyList<GoogleCloudApigeeV1FlowHookConfig>? Flowhooks { get; init; }

    /// <summary>
    /// The location for the gateway config blob as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gatewayConfigLocation")]
    public string? GatewayConfigLocation { get; init; }

    /// <summary>
    /// Name of the PubSub topic for the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pubsubTopic")]
    public string? PubsubTopic { get; init; }

    /// <summary>
    /// Name of the environment configuration in the following format: <c>organizations/{org}/environments/{env}/configs/{config}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The latest runtime configurations for add-ons.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addonsConfig")]
    public GoogleCloudApigeeV1RuntimeAddonsConfig1? AddonsConfig { get; init; }

    /// <summary>
    /// The location for the config blob of API Runtime Control, aka Envoy Adapter, for op-based authentication as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arcConfigLocation")]
    public string? ArcConfigLocation { get; init; }

    /// <summary>
    /// List of deployments in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deployments")]
    public IReadOnlyList<GoogleCloudApigeeV1DeploymentConfig>? Deployments { get; init; }

    /// <summary>
    /// Unique ID for the environment configuration. The ID will only change if the environment is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// List of resource references in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resourceReferences")]
    public IReadOnlyList<GoogleCloudApigeeV1ReferenceConfig>? ResourceReferences { get; init; }

    /// <summary>
    /// List of deployment groups in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentGroups")]
    public IReadOnlyList<GoogleCloudApigeeV1DeploymentGroupConfig>? DeploymentGroups { get; init; }

    /// <summary>
    /// Debug mask that applies to all deployments in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debugMask")]
    public GoogleCloudApigeeV1DebugMask1? DebugMask { get; init; }

    /// <summary>
    /// List of keystores in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keystores")]
    public IReadOnlyList<GoogleCloudApigeeV1KeystoreConfig>? Keystores { get; init; }

    /// <summary>
    /// Time that the environment configuration was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Used by the Control plane to add context information to help detect the source of the document during diagnostics and debugging.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    public string? Provider { get; init; }

    /// <summary>
    /// Revision ID for environment-scoped resources (e.g. target servers, keystores) in this config. This ID will increment any time a resource not scoped to a deployment group changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("envScopedRevisionId")]
    public string? EnvScopedRevisionId { get; init; }

    /// <summary>
    /// The algorithm to resolve IP.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientIpResolutionConfig")]
    public GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1? ClientIpResolutionConfig { get; init; }

    /// <summary>
    /// DEPRECATED: Use revision_id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sequenceNumber")]
    public string? SequenceNumber { get; init; }

    /// <summary>
    /// List of data collectors used by the deployments in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataCollectors")]
    public IReadOnlyList<GoogleCloudApigeeV1DataCollectorConfig>? DataCollectors { get; init; }

    /// <summary>
    /// Trace configurations. Contains config for the environment and config overrides for specific API proxies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceConfig")]
    public GoogleCloudApigeeV1RuntimeTraceConfig1? TraceConfig { get; init; }

    /// <summary>
    /// List of resource versions in the environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resources")]
    public IReadOnlyList<GoogleCloudApigeeV1ResourceConfig>? Resources { get; init; }

    /// <summary>
    /// List of target servers in the environment. Disabled target servers are not displayed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targets")]
    public IReadOnlyList<GoogleCloudApigeeV1TargetServerConfig>? Targets { get; init; }

    /// <summary>
    /// The forward proxy's url to be used by the runtime. When set, runtime will send requests to the target via the given forward proxy. This is only used by programmable gateways.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forwardProxyUri")]
    public string? ForwardProxyUri { get; init; }

    /// <summary>
    /// Feature flags inherited from the organization and environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("featureFlags")]
    public IReadOnlyDictionary<string, string>? FeatureFlags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
