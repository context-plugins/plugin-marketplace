using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record EvictFilesFailingUploadInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the file share for which you want to start the cache clean operation.
    /// </summary>
    [JsonPropertyName("FileShareARN")]
    public required string FileShareArn { get; init; }

    /// <summary>
    /// Specifies whether cache entries with full or partial file data currently stored on the gateway will be forcibly removed by the cache clean operation. Valid arguments: False - The cache clean operation skips cache entries failing upload if they are associated with data currently stored on the gateway. This preserves the cached data. True - The cache clean operation removes cache entries failing upload even if they are associated with data currently stored on the gateway. This deletes the cached data. If ForceRemove is set to True, the cache clean operation will delete file data from the gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForceRemove")]
    public bool? ForceRemove { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
