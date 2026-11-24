using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Models;

public record PagingFacebookBusinessManagerFacebookPagesCommentsApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursors")]
    public Cursors? Cursors { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next")]
    public string? Next { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous")]
    public string? Previous { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
