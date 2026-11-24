using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record DescribeGatewayInformationOutput
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayId")]
    public string? GatewayId { get; init; }

    /// <summary>
    /// The name you configured for your gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayName")]
    public string? GatewayName { get; init; }

    /// <summary>
    /// A value that indicates the time zone configured for the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayTimezone")]
    public string? GatewayTimezone { get; init; }

    /// <summary>
    /// A value that indicates the operating state of the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayState")]
    public string? GatewayState { get; init; }

    /// <summary>
    /// A NetworkInterface array that contains descriptions of the gateway network interfaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayNetworkInterfaces")]
    public IReadOnlyList<NetworkInterface>? GatewayNetworkInterfaces { get; init; }

    /// <summary>
    /// The type of the gateway. Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit this blog post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayType")]
    public string? GatewayType { get; init; }

    /// <summary>
    /// The date on which an update to the gateway is available. This date is in the time zone of the gateway. If the gateway is not available for an update this field is not returned in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextUpdateAvailabilityDate")]
    public string? NextUpdateAvailabilityDate { get; init; }

    /// <summary>
    /// The date on which the last software update was applied to the gateway. If the gateway has never been updated, this field does not return a value in the response. This only only exist and returns once it have been chosen and set by the SGW service, based on the OS version of the gateway VM
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastSoftwareUpdate")]
    public string? LastSoftwareUpdate { get; init; }

    /// <summary>
    /// The ID of the Amazon EC2 instance that was used to launch the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Ec2InstanceId")]
    public string? Ec2InstanceId { get; init; }

    /// <summary>
    /// The Amazon Web Services Region where the Amazon EC2 instance is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Ec2InstanceRegion")]
    public string? Ec2InstanceRegion { get; init; }

    /// <summary>
    /// A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The configuration settings for the virtual private cloud (VPC) endpoint for your gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VPCEndpoint")]
    public string? VpcEndpoint { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor events in the gateway. This field only only exist and returns once it have been chosen and set by the SGW service, based on the OS version of the gateway VM
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CloudWatchLogGroupARN")]
    public string? CloudWatchLogGroupArn { get; init; }

    /// <summary>
    /// The type of hardware or software platform on which the gateway is running. Tape Gateway is no longer available on Snow Family devices.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HostEnvironment")]
    public HostEnvironment? HostEnvironment { get; init; }

    /// <summary>
    /// The type of endpoint for your gateway. Valid Values: STANDARD | FIPS
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndpointType")]
    public string? EndpointType { get; init; }

    /// <summary>
    /// Date after which this gateway will not receive software updates for new features.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SoftwareUpdatesEndDate")]
    public string? SoftwareUpdatesEndDate { get; init; }

    /// <summary>
    /// Date after which this gateway will not receive software updates for new features and bug fixes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DeprecationDate")]
    public string? DeprecationDate { get; init; }

    /// <summary>
    /// Specifies the size of the gateway's metadata cache.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayCapacity")]
    public GatewayCapacity? GatewayCapacity { get; init; }

    /// <summary>
    /// A list of the metadata cache sizes that the gateway can support based on its current hardware specifications.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SupportedGatewayCapacities")]
    public IReadOnlyList<SupportedGatewayCapacity>? SupportedGatewayCapacities { get; init; }

    /// <summary>
    /// A unique identifier for the specific instance of the host platform running the gateway. This value is only available for certain host environments, and its format depends on the host environment type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HostEnvironmentId")]
    public string? HostEnvironmentId { get; init; }

    /// <summary>
    /// The version number of the software running on the gateway appliance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SoftwareVersion")]
    public string? SoftwareVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
