using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record TapeArchive
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of an archived virtual tape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeARN")]
    public string? TapeArn { get; init; }

    /// <summary>
    /// The barcode that identifies the archived virtual tape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeBarcode")]
    public string? TapeBarcode { get; init; }

    /// <summary>
    /// The date the virtual tape was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeCreatedDate")]
    public DateTimeOffset? TapeCreatedDate { get; init; }

    /// <summary>
    /// The size, in bytes, of the archived virtual tape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeSizeInBytes")]
    public int? TapeSizeInBytes { get; init; }

    /// <summary>
    /// The time that the archiving of the virtual tape was completed. The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CompletionTime")]
    public DateTimeOffset? CompletionTime { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being retrieved to. The virtual tape is retrieved from the virtual tape shelf (VTS).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetrievedTo")]
    public string? RetrievedTo { get; init; }

    /// <summary>
    /// The current state of the archived virtual tape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeStatus")]
    public string? TapeStatus { get; init; }

    /// <summary>
    /// The size, in bytes, of data stored on the virtual tape. This value is not available for tapes created prior to May 13, 2015.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeUsedInBytes")]
    public int? TapeUsedInBytes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSKey")]
    public string? KmsKey { get; init; }

    /// <summary>
    /// The ID of the pool that was used to archive the tape. The tapes in this pool are archived in the S3 storage class that is associated with the pool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PoolId")]
    public string? PoolId { get; init; }

    /// <summary>
    /// Set to true if the archived tape is stored as write-once-read-many (WORM).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Worm")]
    public bool? Worm { get; init; }

    /// <summary>
    /// If the archived tape is subject to tape retention lock, the date that the archived tape started being retained.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetentionStartDate")]
    public DateTimeOffset? RetentionStartDate { get; init; }

    /// <summary>
    /// The time that the tape entered the custom tape pool. The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PoolEntryDate")]
    public DateTimeOffset? PoolEntryDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
