using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GenericAttachment
{
    /// <summary>
    /// The title of the option.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// The subtitle shown below the title.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subTitle")]
    public string? SubTitle { get; init; }

    /// <summary>
    /// The URL of an attachment to the response card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachmentLinkUrl")]
    public string? AttachmentLinkUrl { get; init; }

    /// <summary>
    /// The URL of an image that is displayed to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageUrl")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// The list of options to show to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buttons")]
    public IReadOnlyList<RuntimeLexButton>? Buttons { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
