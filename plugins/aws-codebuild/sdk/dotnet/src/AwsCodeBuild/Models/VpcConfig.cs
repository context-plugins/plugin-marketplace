using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record VpcConfig
{
    /// <summary>
    /// The ID of the Amazon VPC.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcId")]
    public string? VpcId { get; init; }

    /// <summary>
    /// A list of one or more subnet IDs in your Amazon VPC.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnets")]
    public IReadOnlyList<string>? Subnets { get; init; }

    /// <summary>
    /// A list of one or more security groups IDs in your Amazon VPC.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityGroupIds")]
    public IReadOnlyList<string>? SecurityGroupIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
