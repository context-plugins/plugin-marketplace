using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record AssignTapePoolInput
{
    /// <summary>
    /// The unique Amazon Resource Name (ARN) of the virtual tape that you want to add to the tape pool.
    /// </summary>
    [JsonPropertyName("TapeARN")]
    public required string TapeArn { get; init; }

    /// <summary>
    /// The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
    /// </summary>
    [JsonPropertyName("PoolId")]
    public required string PoolId { get; init; }

    /// <summary>
    /// Set permissions to bypass governance retention. If the lock type of the archived tape is Governance, the tape's archived age is not older than RetentionLockInDays, and the user does not already have BypassGovernanceRetention, setting this to TRUE enables the user to bypass the retention lock. This parameter is set to true by default for calls from the console. Valid values: TRUE | FALSE
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BypassGovernanceRetention")]
    public bool? BypassGovernanceRetention { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
