using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record BasicWorkspaceInfo
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("default_workflow_id")]
    public required long DefaultWorkflowId { get; init; }

    [JsonPropertyName("estimate_scale")]
    public required IReadOnlyList<long> EstimateScale { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("url_slug")]
    public required string UrlSlug { get; init; }

    [JsonPropertyName("utc_offset")]
    public required string UtcOffset { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("korey_enabled")]
    public bool? KoreyEnabled { get; init; }
}
