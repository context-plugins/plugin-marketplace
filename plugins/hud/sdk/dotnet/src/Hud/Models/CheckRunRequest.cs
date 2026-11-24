using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// Request to execute one check against one resource.
/// </summary>
public record CheckRunRequest
{
    /// <summary>
    /// Platform resources supported by the check framework.
    /// </summary>
    [JsonPropertyName("subject_type")]
    public required CheckSubjectType SubjectType { get; init; }

    [JsonPropertyName("subject_id")]
    public required Guid SubjectId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overwrite")]
    public bool? Overwrite { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
