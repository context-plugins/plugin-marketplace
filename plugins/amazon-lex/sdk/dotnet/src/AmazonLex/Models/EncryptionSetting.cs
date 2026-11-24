using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record EncryptionSetting
{
    /// <summary>
    /// The KMS key ARN used to encrypt the metadata associated with the bot recommendation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyArn")]
    public string? KmsKeyArn { get; init; }

    /// <summary>
    /// The password used to encrypt the recommended bot recommendation file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botLocaleExportPassword")]
    public string? BotLocaleExportPassword { get; init; }

    /// <summary>
    /// The password used to encrypt the associated transcript file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associatedTranscriptsPassword")]
    public string? AssociatedTranscriptsPassword { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
