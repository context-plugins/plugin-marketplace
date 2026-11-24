using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record DockerServerAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi
{
    /// <summary>
    /// Information about the compute resources the docker server uses. Available values include: BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for your docker server. BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for your docker server. BUILD_GENERAL1_LARGE: Use up to 16 GiB memory and 8 vCPUs for your docker server. BUILD_GENERAL1_XLARGE: Use up to 64 GiB memory and 32 vCPUs for your docker server. BUILD_GENERAL1_2XLARGE: Use up to 128 GiB memory and 64 vCPUs for your docker server.
    /// </summary>
    [JsonPropertyName("computeType")]
    public required ComputeType1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi ComputeType { get; init; }

    /// <summary>
    /// A list of one or more security groups IDs. Security groups configured for Docker servers should allow ingress network traffic from the VPC configured in the project. They should allow ingress on port 9876.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityGroupIds")]
    public IReadOnlyList<string>? SecurityGroupIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public DockerServerStatus? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
