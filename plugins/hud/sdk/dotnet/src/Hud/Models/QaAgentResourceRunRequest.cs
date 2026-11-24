using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Run a resource-scoped agent against canonical subjects.
/// </summary>
public record QaAgentResourceRunRequest
{
    [JsonPropertyName("subject_ids")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<Guid> SubjectIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overwrite")]
    public bool? Overwrite { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
