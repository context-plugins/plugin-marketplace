using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ChapInfo
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the volume. Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TargetARN")]
    public string? TargetArn { get; init; }

    /// <summary>
    /// The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SecretToAuthenticateInitiator")]
    public string? SecretToAuthenticateInitiator { get; init; }

    /// <summary>
    /// The iSCSI initiator that connects to the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InitiatorName")]
    public string? InitiatorName { get; init; }

    /// <summary>
    /// The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g., Windows client).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SecretToAuthenticateTarget")]
    public string? SecretToAuthenticateTarget { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
