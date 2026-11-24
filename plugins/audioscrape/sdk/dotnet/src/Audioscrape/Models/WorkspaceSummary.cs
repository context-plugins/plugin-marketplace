using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record WorkspaceSummary
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// Whether this is the workspace the authenticating API key (or session)
    /// is scoped to — the one searches, uploads, and quotas run against.
    /// </summary>
    [JsonPropertyName("is_current")]
    public required bool IsCurrent { get; init; }

    [JsonPropertyName("member_count")]
    public required long MemberCount { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The calling user's role in this workspace: <c>owner</c>, <c>admin</c>, or <c>member</c>.
    /// </summary>
    [JsonPropertyName("role")]
    public required string Role { get; init; }

    /// <summary>
    /// Stable URL slug, e.g. <c>audioscrape</c>.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
