using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record UpdateVocabularyFilterRequest
{
    /// <summary>
    /// The name of the custom vocabulary filter you want to update. Custom vocabulary filter names are case sensitive.
    /// </summary>
    [JsonPropertyName("VocabularyFilterName")]
    public required string VocabularyFilterName { get; init; }

    /// <summary>
    /// Use this parameter if you want to update your custom vocabulary filter by including all desired terms, as comma-separated values, within your request. The other option for updating your vocabulary filter is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the VocabularyFilterFileUri parameter. Note that if you include Words in your request, you cannot use VocabularyFilterFileUri; you must choose one or the other. Each language has a character set that contains all allowed characters for that specific language. If you use u
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Words")]
    public IReadOnlyList<string>? Words { get; init; }

    /// <summary>
    /// The Amazon S3 location of the text file that contains your custom vocabulary filter terms. The URI must be located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt Note that if you include VocabularyFilterFileUri in your request, you cannot use Words; you must choose one or the other.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterFileUri")]
    public string? VocabularyFilterFileUri { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary filter). If you include EncryptionConfiguration in your request, this role must also have permissions to access the specified KMS key. If the role that you specify doesn’t have the appropriate permissions, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataAccessRoleArn")]
    public string? DataAccessRoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionConfiguration")]
    public EncryptionConfiguration? EncryptionConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
