using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// AWS access key (see <see href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS Security Credentials</see>). For information on our data retention policy for user credentials, see <see href="/storage-transfer/docs/data-retention#user-credentials">User credentials</see>.
/// </summary>
public record AwsAccessKey
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
