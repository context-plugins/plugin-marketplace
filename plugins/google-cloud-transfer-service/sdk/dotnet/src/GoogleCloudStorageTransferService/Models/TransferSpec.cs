using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Configuration for running a transfer.
/// </summary>
public record TransferSpec
{
    /// <summary>
    /// Optional. An HDFS cluster data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hdfsDataSource")]
    public HdfsData2? HdfsDataSource { get; init; }

    /// <summary>
    /// Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' "last modification time" do not exclude objects in a data sink.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objectConditions")]
    public ObjectConditions3? ObjectConditions { get; init; }

    /// <summary>
    /// Optional. A Cloud Storage data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsDataSource")]
    public GcsData6? GcsDataSource { get; init; }

    /// <summary>
    /// Optional. A Cloud Storage data sink.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsDataSink")]
    public GcsData1? GcsDataSink { get; init; }

    /// <summary>
    /// Optional. An HTTP URL data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpDataSource")]
    public HttpData2? HttpDataSource { get; init; }

    /// <summary>
    /// Optional. An AWS S3 data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsS3DataSource")]
    public AwsS3Data2? AwsS3DataSource { get; init; }

    /// <summary>
    /// If the option delete_objects_unique_in_sink is <c>true</c> and time-based object conditions such as 'last modification time' are specified, the request fails with an INVALID_ARGUMENT error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transferOptions")]
    public TransferOptions3? TransferOptions { get; init; }

    /// <summary>
    /// Optional. A POSIX Filesystem data sink.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("posixDataSink")]
    public PosixFilesystem3? PosixDataSink { get; init; }

    /// <summary>
    /// Optional. An Azure Blob Storage data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("azureBlobStorageDataSource")]
    public AzureBlobStorageData2? AzureBlobStorageDataSource { get; init; }

    /// <summary>
    /// Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceAgentPoolName")]
    public string? SourceAgentPoolName { get; init; }

    /// <summary>
    /// Optional. An AWS S3 compatible data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsS3CompatibleDataSource")]
    public AwsS3CompatibleData1? AwsS3CompatibleDataSource { get; init; }

    /// <summary>
    /// Optional. A POSIX Filesystem data source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("posixDataSource")]
    public PosixFilesystem1? PosixDataSource { get; init; }

    /// <summary>
    /// For transfers between file systems, specifies a Cloud Storage bucket to be used as an intermediate location through which to transfer data. See <see href="https://cloud.google.com/storage-transfer/docs/file-to-file">Transfer data between file systems</see> for more information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsIntermediateDataLocation")]
    public GcsData2? GcsIntermediateDataLocation { get; init; }

    /// <summary>
    /// A manifest file provides a list of objects to be transferred from the data source. This field points to the location of the manifest file. Otherwise, the entire source bucket is used. ObjectConditions still apply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transferManifest")]
    public TransferManifest2? TransferManifest { get; init; }

    /// <summary>
    /// Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sinkAgentPoolName")]
    public string? SinkAgentPoolName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
