using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record MeWorkspace
{
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Your role in this workspace (<c>owner</c>, <c>admin</c>, or <c>member</c>). <c>null</c>
    /// when the authenticated user has no membership row here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("role")]
    public string? Role { get; init; }

    /// <summary>
    /// Stable URL slug, e.g. <c>audioscrape</c>.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
