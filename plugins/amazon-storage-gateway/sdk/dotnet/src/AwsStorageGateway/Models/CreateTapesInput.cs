using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record CreateTapesInput
{
    /// <summary>
    /// The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tapes with. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
    /// </summary>
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// The size, in bytes, of the virtual tapes that you want to create. The size must be aligned by gigabyte (1024*1024*1024 bytes).
    /// </summary>
    [JsonPropertyName("TapeSizeInBytes")]
    public required int TapeSizeInBytes { get; init; }

    /// <summary>
    /// A unique identifier that you use to retry a request. If you retry a request, use the same ClientToken you specified in the initial request. Using the same ClientToken prevents creating the tape multiple times.
    /// </summary>
    [JsonPropertyName("ClientToken")]
    public required string ClientToken { get; init; }

    /// <summary>
    /// The number of virtual tapes that you want to create.
    /// </summary>
    [JsonPropertyName("NumTapesToCreate")]
    public required int NumTapesToCreate { get; init; }

    /// <summary>
    /// A prefix that you append to the barcode of the virtual tape you are creating. This prefix makes the barcode unique. The prefix must be 1-4 characters in length and must be one of the uppercase letters from A to Z.
    /// </summary>
    [JsonPropertyName("TapeBarcodePrefix")]
    public required string TapeBarcodePrefix { get; init; }

    /// <summary>
    /// Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. Optional. Valid Values: true | false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSEncrypted")]
    public bool? KmsEncrypted { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when KMSEncrypted is true. Optional.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSKey")]
    public string? KmsKey { get; init; }

    /// <summary>
    /// The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PoolId")]
    public string? PoolId { get; init; }

    /// <summary>
    /// Set to TRUE if the tape you are creating is to be configured as a write-once-read-many (WORM) tape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Worm")]
    public bool? Worm { get; init; }

    /// <summary>
    /// A list of up to 50 tags that can be assigned to a virtual tape. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
