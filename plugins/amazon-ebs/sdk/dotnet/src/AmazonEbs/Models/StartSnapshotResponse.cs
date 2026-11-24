using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Models;
using AmazonEbs.Models.Enums;

namespace AmazonEbs.Models;

public record StartSnapshotResponse
{
    /// <summary>
    /// The description of the snapshot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    /// <summary>
    /// The ID of the snapshot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SnapshotId")]
    public string? SnapshotId { get; init; }

    /// <summary>
    /// The Amazon Web Services account ID of the snapshot owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OwnerId")]
    public string? OwnerId { get; init; }

    /// <summary>
    /// The status of the snapshot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status? Status { get; init; }

    /// <summary>
    /// The timestamp when the snapshot was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The size of the volume, in GiB.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VolumeSize")]
    public int? VolumeSize { get; init; }

    /// <summary>
    /// The size of the blocks in the snapshot, in bytes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BlockSize")]
    public int? BlockSize { get; init; }

    /// <summary>
    /// The tags applied to the snapshot. You can specify up to 50 tags per snapshot. For more information, see Tagging your Amazon EC2 resources in the Amazon Elastic Compute Cloud User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The ID of the parent snapshot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ParentSnapshotId")]
    public string? ParentSnapshotId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the snapshot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KmsKeyArn")]
    public string? KmsKeyArn { get; init; }

    /// <summary>
    /// Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SseType")]
    public SseType? SseType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
