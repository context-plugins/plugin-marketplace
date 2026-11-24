using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record CreateNfsFileShareInput
{
    /// <summary>
    /// A unique string value that you supply that is used by S3 File Gateway to ensure idempotent file share creation.
    /// </summary>
    [JsonPropertyName("ClientToken")]
    public required string ClientToken { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NFSFileShareDefaults")]
    public NfsFileShareDefaults? NfsFileShareDefaults { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the S3 File Gateway on which you want to create a file share.
    /// </summary>
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

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

    /// <summary>
    /// Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if KMSEncrypted is true, or if EncryptionType is SseKms or DsseKms.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KMSKey")]
    public string? KmsKey { get; init; }

    /// <summary>
    /// The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it accesses the underlying storage.
    /// </summary>
    [JsonPropertyName("Role")]
    public required string Role { get; init; }

    /// <summary>
    /// A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an optional prefix concatenation. The prefix must end with a forward slash (/). You can specify LocationARN as a bucket ARN, access point ARN or access point alias, as shown in the following examples. Bucket ARN: arn:aws:s3:::amzn-s3-demo-bucket/prefix/ Access point ARN: arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/ If you specify an access point, the bucket policy must be configured to delegate access control to the access point. For information, see Delegating acce
    /// </summary>
    [JsonPropertyName("LocationARN")]
    public required string LocationArn { get; init; }

    /// <summary>
    /// The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is S3_STANDARD. Optional. Valid Values: S3_STANDARD | S3_INTELLIGENT_TIERING | S3_STANDARD_IA | S3_ONEZONE_IA
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DefaultStorageClass")]
    public string? DefaultStorageClass { get; init; }

    /// <summary>
    /// A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway puts objects into. The default value is private.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ObjectACL")]
    public ObjectAcl? ObjectAcl { get; init; }

    /// <summary>
    /// The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IPv4/IPv6 addresses or valid CIDR blocks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientList")]
    public IReadOnlyList<string>? ClientList { get; init; }

    /// <summary>
    /// A value that maps a user to anonymous user. Valid values are the following: RootSquash: Only root is mapped to anonymous user. NoSquash: No one is mapped to anonymous user. AllSquash: Everyone is mapped to anonymous user.
    /// </summary>
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
    /// A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The name of the file share. Optional. FileShareName must be set if an S3 prefix name is set in LocationARN, or if an access point or access point alias is used. A valid NFS file share name can only contain the following characters: a-z, A-Z, 0-9, -, ., and _.
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
