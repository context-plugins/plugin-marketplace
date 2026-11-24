using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record WorkspaceDetail
{
    /// <summary>
    /// ALL of the workspace's datasets — <c>public</c>, <c>workspace</c>, and <c>private</c>.
    /// </summary>
    [JsonPropertyName("datasets")]
    public required IReadOnlyList<DatasetSummary> Datasets { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("id")]
    public required long Id { get; init; }

    [JsonPropertyName("member_count")]
    public required long MemberCount { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The calling user's role in this workspace: <c>owner</c>, <c>admin</c>, or <c>member</c>.
    /// </summary>
    [JsonPropertyName("role")]
    public required string Role { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
