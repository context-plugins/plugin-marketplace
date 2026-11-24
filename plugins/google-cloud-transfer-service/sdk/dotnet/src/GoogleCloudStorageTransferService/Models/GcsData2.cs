using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// For transfers between file systems, specifies a Cloud Storage bucket to be used as an intermediate location through which to transfer data. See <see href="https://cloud.google.com/storage-transfer/docs/file-to-file">Transfer data between file systems</see> for more information.
/// </summary>
public record GcsData2
{
    /// <summary>
    /// Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. The root path value must meet <see href="/storage/docs/naming#objectnames">Object Name Requirements</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// Preview. Enables the transfer of managed folders between Cloud Storage buckets. Set this option on the gcs_data_source. If set to true: - Managed folders in the source bucket are transferred to the destination bucket. - Managed folders in the destination bucket are overwritten. Other OVERWRITE options are not supported. See <see href="/storage-transfer/docs/managed-folders">Transfer Cloud Storage managed folders</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("managedFolderTransferEnabled")]
    public bool? ManagedFolderTransferEnabled { get; init; }

    /// <summary>
    /// Required. Cloud Storage bucket name. Must meet <see href="/storage/docs/naming#requirements">Bucket Name Requirements</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucketName")]
    public string? BucketName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
