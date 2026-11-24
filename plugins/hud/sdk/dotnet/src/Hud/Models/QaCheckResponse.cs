using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record QaCheckResponse
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// What a check judges: a completed evaluation trace, or a task's current version.
    /// </summary>
    [JsonPropertyName("subject_type")]
    public required QaSubjectType SubjectType { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("question")]
    public required string Question { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
