using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record Tape
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the virtual tape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeARN")]
    public string? TapeArn { get; init; }

    /// <summary>
    /// The barcode that identifies a specific virtual tape.
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
    /// The size, in bytes, of the virtual tape capacity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeSizeInBytes")]
    public int? TapeSizeInBytes { get; init; }

    /// <summary>
    /// The current state of the virtual tape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeStatus")]
    public string? TapeStatus { get; init; }

    /// <summary>
    /// The virtual tape library (VTL) device that the virtual tape is associated with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VTLDevice")]
    public string? VtlDevice { get; init; }

    /// <summary>
    /// For archiving virtual tapes, indicates how much data remains to be uploaded before archiving is complete. Range: 0 (not started) to 100 (complete).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Progress")]
    public double? Progress { get; init; }

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
    /// The ID of the pool that contains tapes that will be archived. The tapes in this pool are archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PoolId")]
    public string? PoolId { get; init; }

    /// <summary>
    /// If the tape is archived as write-once-read-many (WORM), this value is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Worm")]
    public bool? Worm { get; init; }

    /// <summary>
    /// The date that the tape is first archived with tape retention lock enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RetentionStartDate")]
    public DateTimeOffset? RetentionStartDate { get; init; }

    /// <summary>
    /// The date that the tape enters a custom tape pool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PoolEntryDate")]
    public DateTimeOffset? PoolEntryDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
