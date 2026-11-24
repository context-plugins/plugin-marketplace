using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.OneOf;

namespace BundleSocial.Models;

public record Content
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    [MaxLength(1000)]
    public string? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachments")]
    [MaxLength(10)]
    public IReadOnlyList<AttachmentBundleSocialConversationApi>? Attachments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quickReplies")]
    [MaxLength(13)]
    public IReadOnlyList<QuickReplyBundleSocialConversationApi>? QuickReplies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buttons")]
    [MaxLength(3)]
    public IReadOnlyList<Button3BundleSocialConversationApi>? Buttons { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("carousel")]
    public Carousel? Carousel { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
