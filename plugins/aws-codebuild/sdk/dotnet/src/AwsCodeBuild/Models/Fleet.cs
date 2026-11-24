using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record Fleet
{
    /// <summary>
    /// The ARN of the compute fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("arn")]
    public string? Arn { get; init; }

    /// <summary>
    /// The name of the compute fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The ID of the compute fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The time at which the compute fleet was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public DateTimeOffset? Created { get; init; }

    /// <summary>
    /// The time at which the compute fleet was last modified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModified")]
    public DateTimeOffset? LastModified { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public FleetStatus? Status { get; init; }

    /// <summary>
    /// The initial number of machines allocated to the compute ﬂeet, which deﬁnes the number of builds that can run in parallel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baseCapacity")]
    public int? BaseCapacity { get; init; }

    /// <summary>
    /// The environment type of the compute fleet. The environment type ARM_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (São Paulo). The environment type ARM_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai). The environ
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentType")]
    public EnvironmentType? EnvironmentType { get; init; }

    /// <summary>
    /// Information about the compute resources the compute fleet uses. Available values include: ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of machine. If you use ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using computeConfiguration. CodeBuild will select the cheapest instance that satisfies your specified attributes. For more information, see Reserved capacity environment types in the CodeBuild User Guide. CUSTOM_INSTANCE_TYPE: Specify the instance type for your compute fleet. For a list of supported instance types, see Supported instance
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("computeType")]
    public ComputeTypeAwsCodeBuildFleetApi? ComputeType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("computeConfiguration")]
    public ComputeConfiguration? ComputeConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scalingConfiguration")]
    public ScalingConfigurationOutput? ScalingConfiguration { get; init; }

    /// <summary>
    /// The compute fleet overflow behavior. For overflow behavior QUEUE, your overflow builds need to wait on the existing fleet instance to become available. For overflow behavior ON_DEMAND, your overflow builds run on CodeBuild on-demand. If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure that you add the required VPC permissions to your project service role. For more information, see Example policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overflowBehavior")]
    public OverflowBehavior? OverflowBehavior { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcConfig")]
    public VpcConfig? VpcConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxyConfiguration")]
    public ProxyConfiguration? ProxyConfiguration { get; init; }

    /// <summary>
    /// The Amazon Machine Image (AMI) of the compute fleet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageId")]
    public string? ImageId { get; init; }

    /// <summary>
    /// The service role associated with the compute fleet. For more information, see Allow a user to add a permission policy for a fleet service role in the CodeBuild User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fleetServiceRole")]
    public string? FleetServiceRole { get; init; }

    /// <summary>
    /// A list of tag key and value pairs associated with this compute fleet. These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
