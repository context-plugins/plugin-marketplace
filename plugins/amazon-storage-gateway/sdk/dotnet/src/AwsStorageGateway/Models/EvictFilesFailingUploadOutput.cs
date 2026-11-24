using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record EvictFilesFailingUploadOutput
{
    /// <summary>
    /// The randomly generated ID of the CloudWatch notification associated with the cache clean operation. This ID is in UUID format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotificationId")]
    public string? NotificationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
