using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record CreateTapePoolInput
{
    /// <summary>
    /// The name of the new custom tape pool.
    /// </summary>
    [JsonPropertyName("PoolName")]
    public required string PoolName { get; init; }

    /// <summary>
    /// The storage class that is associated with the new custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
    /// </summary>
    [JsonPropertyName("StorageClass")]
    public required StorageClass StorageClass { get; init; }

    /// <summary>
    /// Tape retention lock can be configured in two modes. When configured in governance mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetentionLockType")]
    public RetentionLockType? RetentionLockType { get; init; }

    /// <summary>
    /// Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetentionLockTimeInDays")]
    public int? RetentionLockTimeInDays { get; init; }

    /// <summary>
    /// A list of up to 50 tags that can be assigned to tape pool. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
