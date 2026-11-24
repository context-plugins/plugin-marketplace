using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record GatewayInfo
{
    /// <summary>
    /// The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayId")]
    public string? GatewayId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// The type of the gateway. Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit this blog post.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayType")]
    public string? GatewayType { get; init; }

    /// <summary>
    /// The state of the gateway. Valid Values: DISABLED | ACTIVE
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayOperationalState")]
    public string? GatewayOperationalState { get; init; }

    /// <summary>
    /// The name of the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayName")]
    public string? GatewayName { get; init; }

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
    /// The type of hardware or software platform on which the gateway is running. Tape Gateway is no longer available on Snow Family devices.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HostEnvironment")]
    public HostEnvironment? HostEnvironment { get; init; }

    /// <summary>
    /// A unique identifier for the specific instance of the host platform running the gateway. This value is only available for certain host environments, and its format depends on the host environment type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HostEnvironmentId")]
    public string? HostEnvironmentId { get; init; }

    /// <summary>
    /// Date after which this gateway will not receive software updates for new features and bug fixes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DeprecationDate")]
    public string? DeprecationDate { get; init; }

    /// <summary>
    /// The version number of the software running on the gateway appliance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SoftwareVersion")]
    public string? SoftwareVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
