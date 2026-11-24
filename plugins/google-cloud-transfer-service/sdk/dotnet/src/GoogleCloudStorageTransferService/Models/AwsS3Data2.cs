using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Optional. An AWS S3 data source.
/// </summary>
public record AwsS3Data2
{
    /// <summary>
    /// Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// Required. S3 Bucket name (see <see href="https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html">Creating a bucket</see>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucketName")]
    public string? BucketName { get; init; }

    /// <summary>
    /// Optional. The Resource name of a secret in Secret Manager. AWS credentials must be stored in Secret Manager in JSON format: { "access_key_id": "ACCESS_KEY_ID", "secret_access_key": "SECRET_ACCESS_KEY" } GoogleServiceAccount must be granted <c>roles/secretmanager.secretAccessor</c> for the resource. See [Configure access to a source: Amazon S3] (https://cloud.google.com/storage-transfer/docs/source-amazon-s3#secret_manager) for more information. If <c>credentials_secret</c> is specified, do not specify role_arn or aws_access_key. Format: <c>projects/{project_number}/secrets/{secret_name}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credentialsSecret")]
    public string? CredentialsSecret { get; init; }

    /// <summary>
    /// Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on the bucket must be granted to the access ID of the AWS access key. For information on our data retention policy for user credentials, see <see href="/storage-transfer/docs/data-retention#user-credentials">User credentials</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsAccessKey")]
    public AwsAccessKey2? AwsAccessKey { get; init; }

    /// <summary>
    /// Egress bytes over a Google-managed private network. This network is shared between other users of Storage Transfer Service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("managedPrivateNetwork")]
    public bool? ManagedPrivateNetwork { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the role to support temporary credentials via <c>AssumeRoleWithWebIdentity</c>. For more information about ARNs, see <see href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM ARNs</see>. When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a <c>AssumeRoleWithWebIdentity</c> call for the provided role using the GoogleServiceAccount for this project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleArn")]
    public string? RoleArn { get; init; }

    /// <summary>
    /// Service Directory Service to be used as the endpoint for transfers from a custom VPC. Format: <c>projects/{project_id}/locations/{location}/namespaces/{namespace}/services/{service}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privateNetworkService")]
    public string? PrivateNetworkService { get; init; }

    /// <summary>
    /// Optional. The CloudFront distribution domain name pointing to this bucket, to use when fetching. See <see href="https://cloud.google.com/storage-transfer/docs/s3-cloudfront">Transfer from S3 via CloudFront</see> for more information. Format: <c>https://{id}.cloudfront.net</c> or any valid custom domain. Must begin with <c>https://</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudfrontDomain")]
    public string? CloudfrontDomain { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
