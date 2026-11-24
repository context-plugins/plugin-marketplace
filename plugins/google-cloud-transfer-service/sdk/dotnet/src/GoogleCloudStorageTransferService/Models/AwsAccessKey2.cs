using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on the bucket must be granted to the access ID of the AWS access key. For information on our data retention policy for user credentials, see <see href="/storage-transfer/docs/data-retention#user-credentials">User credentials</see>.
/// </summary>
public record AwsAccessKey2
{
    /// <summary>
    /// Required. AWS secret access key. This field is not returned in RPC responses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretAccessKey")]
    public string? SecretAccessKey { get; init; }

    /// <summary>
    /// Required. AWS access key ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accessKeyId")]
    public string? AccessKeyId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
