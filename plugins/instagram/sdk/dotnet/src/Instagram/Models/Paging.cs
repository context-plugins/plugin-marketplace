using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record Paging
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursors")]
    public Cursors? Cursors { get; init; }

    /// <summary>
    /// URL to fetch next page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next")]
    public string? Next { get; init; }

    /// <summary>
    /// URL to fetch previous page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous")]
    public string? Previous { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
