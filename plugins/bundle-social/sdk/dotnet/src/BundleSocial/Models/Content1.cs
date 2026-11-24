using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record Content1
{
    [JsonPropertyName("text")]
    [StringLength(1000, MinimumLength = 1)]
    public required string Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachments")]
    [MaxLength(10)]
    public IReadOnlyList<AttachmentBundleSocialConversationApi>? Attachments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("carousel")]
    public Carousel? Carousel { get; init; }
}
