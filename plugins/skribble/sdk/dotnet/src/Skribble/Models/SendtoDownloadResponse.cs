using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record SendtoDownloadResponse
{
    /// <summary>
    /// Base64-encoded document content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
