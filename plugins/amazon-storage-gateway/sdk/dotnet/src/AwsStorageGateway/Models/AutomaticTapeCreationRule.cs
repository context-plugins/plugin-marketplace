using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record AutomaticTapeCreationRule
{
    /// <summary>
    /// A prefix that you append to the barcode of the virtual tape that you are creating. This prefix makes the barcode unique. The prefix must be 1-4 characters in length and must be one of the uppercase letters from A to Z.
    /// </summary>
    [JsonPropertyName("TapeBarcodePrefix")]
    public required string TapeBarcodePrefix { get; init; }

    /// <summary>
    /// The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the Amazon S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
    /// </summary>
    [JsonPropertyName("PoolId")]
    public required string PoolId { get; init; }

    /// <summary>
    /// The size, in bytes, of the virtual tape capacity.
    /// </summary>
    [JsonPropertyName("TapeSizeInBytes")]
    public required int TapeSizeInBytes { get; init; }

    /// <summary>
    /// The minimum number of available virtual tapes that the gateway maintains at all times. If the number of tapes on the gateway goes below this value, the gateway creates as many new tapes as are needed to have MinimumNumTapes on the gateway. For more information about automatic tape creation, see Creating Tapes Automatically.
    /// </summary>
    [JsonPropertyName("MinimumNumTapes")]
    public required int MinimumNumTapes { get; init; }

    /// <summary>
    /// Set to true to indicate that tapes are to be archived as write-once-read-many (WORM). Set to false when WORM is not enabled for tapes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Worm")]
    public bool? Worm { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
