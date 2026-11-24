using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record DeleteChapCredentialsOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TargetARN")]
    public string? TargetArn { get; init; }

    /// <summary>
    /// The iSCSI initiator that connects to the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InitiatorName")]
    public string? InitiatorName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
