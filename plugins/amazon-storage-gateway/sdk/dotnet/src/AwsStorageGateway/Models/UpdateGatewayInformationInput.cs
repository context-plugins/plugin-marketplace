using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record UpdateGatewayInformationInput
{
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayName")]
    public string? GatewayName { get; init; }

    /// <summary>
    /// A value that indicates the time zone of the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayTimezone")]
    public string? GatewayTimezone { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that you want to use to monitor and log events in the gateway. For more information, see What is Amazon CloudWatch Logs?
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CloudWatchLogGroupARN")]
    public string? CloudWatchLogGroupArn { get; init; }

    /// <summary>
    /// Specifies the size of the gateway's metadata cache. This setting impacts gateway performance and hardware recommendations. For more information, see Performance guidance for gateways with multiple file shares in the Amazon S3 File Gateway User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayCapacity")]
    public GatewayCapacity1? GatewayCapacity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
