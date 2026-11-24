using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record MedicalScribeConfigurationEvent
{
    /// <summary>
    /// Specify the name of the custom vocabulary you want to use for your streaming session. Custom vocabulary names are case-sensitive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyName")]
    public string? VocabularyName { get; init; }

    /// <summary>
    /// Specify the name of the custom vocabulary filter you want to include in your streaming session. Custom vocabulary filter names are case-sensitive. If you include VocabularyFilterName in the MedicalScribeConfigurationEvent, you must also include VocabularyFilterMethod.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterName")]
    public string? VocabularyFilterName { get; init; }

    /// <summary>
    /// Specify how you want your custom vocabulary filter applied to the streaming session. To replace words with ***, specify mask. To delete words, specify remove. To flag words without changing them, specify tag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterMethod")]
    public VocabularyFilterMethod1? VocabularyFilterMethod { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 output bucket you specified, and use your KMS key if supplied. If the role that you specify doesn’t have the appropriate permissions, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see Amazon Web Services HealthScribe.
    /// </summary>
    [JsonPropertyName("ResourceAccessRoleArn")]
    public required string ResourceAccessRoleArn { get; init; }

    /// <summary>
    /// Specify which speaker is on which audio channel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChannelDefinitions")]
    public IReadOnlyList<TranscribestreamingMedicalScribeChannelDefinition>? ChannelDefinitions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionSettings")]
    public MedicalScribeEncryptionSettings? EncryptionSettings { get; init; }

    [JsonPropertyName("PostStreamAnalyticsSettings")]
    public required MedicalScribePostStreamAnalyticsSettings PostStreamAnalyticsSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalScribeContext")]
    public MedicalScribeContext? MedicalScribeContext { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
