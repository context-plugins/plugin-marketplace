using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Node Group. The NodeGroup resource is not related to the NodeGroupAffinity resource.
/// </summary>
public record NodeGroup
{
    /// <summary>
    /// The Node group resource name (https://aip.dev/122).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Required. Node group roles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roles")]
    public IReadOnlyList<Role1>? Roles { get; init; }

    /// <summary>
    /// Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Optional. The node group instance group configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nodeGroupConfig")]
    public InstanceGroupConfig2? NodeGroupConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
