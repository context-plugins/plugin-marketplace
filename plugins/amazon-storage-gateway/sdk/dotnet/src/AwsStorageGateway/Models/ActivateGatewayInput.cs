using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ActivateGatewayInput
{
    /// <summary>
    /// Your gateway activation key. You can obtain the activation key by sending an HTTP GET request with redirects enabled to the gateway IP address (port 80). The redirect URL returned in the response provides you the activation key for your gateway in the query string parameter activationKey. It may also include other activation-related parameters, however, these are merely defaults -- the arguments you pass to the ActivateGateway API call determine the actual configuration of your gateway. For more information, see Getting activation key in the Storage Gateway User Guide.
    /// </summary>
    [JsonPropertyName("ActivationKey")]
    public required string ActivationKey { get; init; }

    /// <summary>
    /// The name you configured for your gateway.
    /// </summary>
    [JsonPropertyName("GatewayName")]
    public required string GatewayName { get; init; }

    /// <summary>
    /// A value that indicates the time zone you want to set for the gateway. The time zone is of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, GMT indicates Greenwich Mean Time without any offset. GMT-4:00 indicates the time is 4 hours behind GMT. GMT+2:00 indicates the time is 2 hours ahead of GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule.
    /// </summary>
    [JsonPropertyName("GatewayTimezone")]
    public required string GatewayTimezone { get; init; }

    /// <summary>
    /// A value that indicates the Amazon Web Services Region where you want to store your data. The gateway Amazon Web Services Region specified must be the same Amazon Web Services Region as the Amazon Web Services Region in your Host header in the request. For more information about available Amazon Web Services Regions and endpoints for Storage Gateway, see Storage Gateway endpoints and quotas in the Amazon Web Services General Reference. Valid Values: See Storage Gateway endpoints and quotas in the Amazon Web Services General Reference.
    /// </summary>
    [JsonPropertyName("GatewayRegion")]
    public required string GatewayRegion { get; init; }

    /// <summary>
    /// A value that defines the type of gateway to activate. The type specified is critical to all later functions of the gateway and cannot be changed after activation. The default value is CACHED. Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit this blog post. Valid Values: STORED | CACHED | VTL | FILE_S3 | FILE_FSX_SMB
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayType")]
    public string? GatewayType { get; init; }

    /// <summary>
    /// The value that indicates the type of tape drive to use for tape gateway. This field is optional. Valid Values: IBM-ULT3580-TD5
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeDriveType")]
    public string? TapeDriveType { get; init; }

    /// <summary>
    /// The value that indicates the type of medium changer to use for tape gateway. This field is optional. Valid Values: STK-L700 | AWS-Gateway-VTL | IBM-03584L32-0402
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediumChangerType")]
    public string? MediumChangerType { get; init; }

    /// <summary>
    /// A list of up to 50 tags that you can assign to the gateway. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers that can be represented in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
