using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ModelsLexMessageAmazonLexModelBuildingV2VersionsApi
{
    /// <summary>
    /// The content type of the message string.
    /// </summary>
    [JsonPropertyName("contentType")]
    public required ContentTypeAmazonLexModelBuildingV2VersionsApi ContentType { get; init; }

    /// <summary>
    /// The text of the message.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// Identifies the message group that the message belongs to. When a group is assigned to a message, Amazon Lex returns one message from each group in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupNumber")]
    public int? GroupNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
