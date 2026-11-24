using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Validation;
using FacebookBusinessManager.Core.Validation.Attributes;

namespace FacebookBusinessManager.Models;

public record CommentsRequest
{
    /// <summary>
    /// The comment text
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// URL of an image to include with the comment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment_url")]
    [Format(FormatKind.Uri)]
    public string? AttachmentUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
