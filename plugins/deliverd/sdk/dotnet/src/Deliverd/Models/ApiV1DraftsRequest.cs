using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1DraftsRequest
{
    /// <summary>
    /// The complete HTML document.
    /// </summary>
    [JsonPropertyName("html")]
    public required string Html { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    [MaxLength(300)]
    public string? Title { get; init; }

    /// <summary>
    /// Which AI or tool produced it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceTool")]
    [MaxLength(100)]
    public string? SourceTool { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
