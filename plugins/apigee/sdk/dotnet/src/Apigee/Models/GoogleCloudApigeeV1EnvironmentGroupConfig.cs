using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// EnvironmentGroupConfig is a revisioned snapshot of an EnvironmentGroup and its associated routing rules.
/// </summary>
public record GoogleCloudApigeeV1EnvironmentGroupConfig
{
    /// <summary>
    /// A list of proxies in each deployment group for proxy chaining calls.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpointChainingRules")]
    public IReadOnlyList<GoogleCloudApigeeV1EndpointChainingRule>? EndpointChainingRules { get; init; }

    /// <summary>
    /// Host names for the environment group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostnames")]
    public IReadOnlyList<string>? Hostnames { get; init; }

    /// <summary>
    /// Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the revision, the more recently the configuration was deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// Ordered list of routing rules defining how traffic to this environment group's hostnames should be routed to different environments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routingRules")]
    public IReadOnlyList<GoogleCloudApigeeV1RoutingRule>? RoutingRules { get; init; }

    /// <summary>
    /// When this message appears in the top-level IngressConfig, this field will be populated in lieu of the inlined routing_rules and hostnames fields. Some URL for downloading the full EnvironmentGroupConfig for this group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// A unique id for the environment group config that will only change if the environment group is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Name of the environment group in the following format: <c>organizations/{org}/envgroups/{envgroup}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
