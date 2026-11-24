using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record NfsFileShareInfo
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NFSFileShareDefaults")]
    public NfsFileShareDefaults? NfsFileShareDefaults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileShareARN")]
    public string? FileShareArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileShareId")]
    public string? FileShareId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileShareStatus")]
    public string? FileShareStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// A value that specifies the type of server-side encryption that the file share will use for the data that it stores in Amazon S3. We recommend using EncryptionType instead of KMSEncrypted to set the file share encryption method. You do not need to provide values for both parameters. If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if EncryptionType is SseS3, then KMSEncrypted must be false. If EncryptionType is SseKms or DsseKms, then KMSEncrypted must be true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionType")]
    public EncryptionType? EncryptionType { get; init; }

    /// <summary>
    /// Optional. Set to true to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS), or false to use a key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the EncryptionType parameter instead. We recommend using EncryptionType instead of KMSEncrypted to set the file share encryption method. You do not need to provide values for both parameters. If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if EncryptionType is SseS3, then KMSEncrypted must be false. If EncryptionType is SseKms
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSEncrypted")]
    public bool? KmsEncrypted { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSKey")]
    public string? KmsKey { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Path")]
    public string? Path { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Role")]
    public string? Role { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LocationARN")]
    public string? LocationArn { get; init; }

    /// <summary>
    /// The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is S3_STANDARD. Optional. Valid Values: S3_STANDARD | S3_INTELLIGENT_TIERING | S3_STANDARD_IA | S3_ONEZONE_IA
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DefaultStorageClass")]
    public string? DefaultStorageClass { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ObjectACL")]
    public ObjectAcl2? ObjectAcl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientList")]
    public IReadOnlyList<string>? ClientList { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Squash")]
    public string? Squash { get; init; }

    /// <summary>
    /// A value that sets the write status of a file share. Set this value to true to set the write status to read-only, otherwise set to false. Valid Values: true | false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReadOnly")]
    public bool? ReadOnly { get; init; }

    /// <summary>
    /// A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, otherwise set to false. The default value is true. Valid Values: true | false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GuessMIMETypeEnabled")]
    public bool? GuessMimeTypeEnabled { get; init; }

    /// <summary>
    /// A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to true, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data. RequesterPays is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration. Valid Values: true | false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RequesterPays")]
    public bool? RequesterPays { get; init; }

    /// <summary>
    /// A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource API operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The name of the file share. Optional. FileShareName must be set if an S3 prefix name is set in LocationARN, or if an access point or access point alias is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileShareName")]
    public string? FileShareName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheAttributes")]
    public CacheAttributes? CacheAttributes { get; init; }

    /// <summary>
    /// The notification policy of the file share. SettlingTimeInSeconds controls the number of seconds to wait after the last point in time a client wrote to a file before generating an ObjectUploaded notification. Because clients can make many small writes to files, it's best to set this parameter for as long as possible to avoid generating multiple notifications for the same file in a small time period. SettlingTimeInSeconds has no effect on the timing of the object uploading to Amazon S3, only the timing of the notification. This setting is not meant to specify an exact time at which the notificat
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotificationPolicy")]
    public string? NotificationPolicy { get; init; }

    /// <summary>
    /// Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to Amazon S3. This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VPCEndpointDNSName")]
    public string? VpcEndpointDnsName { get; init; }

    /// <summary>
    /// Specifies the Region of the S3 bucket where the NFS file share stores files. This parameter is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that points to a VPC access point.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BucketRegion")]
    public string? BucketRegion { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the storage used for audit logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AuditDestinationARN")]
    public string? AuditDestinationArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
