using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Models.Enums;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
/// </summary>
public record PrivateConnection
{
    /// <summary>
    /// Output only. The state of the Private Connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State2? State { get; init; }

    /// <summary>
    /// Output only. In case of error, the details of the error in a user-friendly format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error2? Error { get; init; }

    /// <summary>
    /// Labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Required. Display name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. The update time of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// VPC Peering Config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcPeeringConfig")]
    public VpcPeeringConfig2? VpcPeeringConfig { get; init; }

    /// <summary>
    /// Output only. Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("satisfiesPzs")]
    public bool? SatisfiesPzs { get; init; }

    /// <summary>
    /// Output only. Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("satisfiesPzi")]
    public bool? SatisfiesPzi { get; init; }

    /// <summary>
    /// Output only. The create time of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// PSC Interface Config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pscInterfaceConfig")]
    public PscInterfaceConfig1? PscInterfaceConfig { get; init; }

    /// <summary>
    /// Output only. Identifier. The resource's name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
