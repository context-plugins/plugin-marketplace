using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record PoolInfo
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the custom tape pool. Use the ListTapePools operation to return a list of custom tape pools for your account and Amazon Web Services Region.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PoolARN")]
    public string? PoolArn { get; init; }

    /// <summary>
    /// The name of the custom tape pool. PoolName can use all ASCII characters, except '/' and '\'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PoolName")]
    public string? PoolName { get; init; }

    /// <summary>
    /// The storage class that is associated with the custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StorageClass")]
    public StorageClass1? StorageClass { get; init; }

    /// <summary>
    /// Tape retention lock type, which can be configured in two modes. When configured in governance mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetentionLockType")]
    public RetentionLockType1? RetentionLockType { get; init; }

    /// <summary>
    /// Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetentionLockTimeInDays")]
    public int? RetentionLockTimeInDays { get; init; }

    /// <summary>
    /// Status of the custom tape pool. Pool can be ACTIVE or DELETED.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PoolStatus")]
    public PoolStatus? PoolStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
