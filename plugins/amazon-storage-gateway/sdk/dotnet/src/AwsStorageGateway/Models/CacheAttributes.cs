using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record CacheAttributes
{
    /// <summary>
    /// Refreshes a file share's cache by using Time To Live (TTL). TTL is the length of time since the last refresh after which access to the directory would cause the file gateway to first refresh that directory's contents from the Amazon S3 bucket or Amazon FSx file system. The TTL duration is in seconds. Valid Values:0, 300 to 2,592,000 seconds (5 minutes to 30 days)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheStaleTimeoutInSeconds")]
    public int? CacheStaleTimeoutInSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
