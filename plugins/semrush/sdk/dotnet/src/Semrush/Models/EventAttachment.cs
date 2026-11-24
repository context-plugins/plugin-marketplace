using System.Text.Json.Serialization;
using Semrush.Core.Models;

namespace Semrush.Models;

/// <summary>
/// Event additional files
/// </summary>
public record EventAttachment
{
    /// <summary>
    /// File name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// File content mime type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mime")]
    public string? Mime { get; init; }

    /// <summary>
    /// File content in Base64
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
