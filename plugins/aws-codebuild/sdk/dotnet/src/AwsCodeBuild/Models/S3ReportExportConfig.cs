using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record S3ReportExportConfig
{
    /// <summary>
    /// The name of the S3 bucket where the raw data of a report are exported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucket")]
    public string? Bucket { get; init; }

    /// <summary>
    /// The Amazon Web Services account identifier of the owner of the Amazon S3 bucket. This allows report data to be exported to an Amazon S3 bucket that is owned by an account other than the account running the build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bucketOwner")]
    public string? BucketOwner { get; init; }

    /// <summary>
    /// The path to the exported report's raw data results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    /// <summary>
    /// The type of build output artifact to create. Valid values include: NONE: CodeBuild creates the raw data in the output bucket. This is the default if packaging is not specified. ZIP: CodeBuild creates a ZIP file with the raw data in the output bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("packaging")]
    public Packaging1? Packaging { get; init; }

    /// <summary>
    /// The encryption key for the report's encrypted raw data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionKey")]
    public string? EncryptionKey { get; init; }

    /// <summary>
    /// A boolean value that specifies if the results of a report are encrypted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionDisabled")]
    public bool? EncryptionDisabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
