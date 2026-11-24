using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1KnowledgeImportRequest
{
    /// <summary>
    /// Markdown: a Deliverd export, or a notes file such as AGENTS.md or CLAUDE.md. Each heading becomes one proposed entry
    /// </summary>
    [JsonPropertyName("markdown")]
    [StringLength(1000000, MinimumLength = 1)]
    public required string Markdown { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspaceId")]
    public Guid? WorkspaceId { get; init; }

    /// <summary>
    /// Where the file came from, e.g. the repository and path
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    [MaxLength(200)]
    public string? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
