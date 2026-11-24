using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Bulk lifecycle-stage move.
/// <para>
/// Advance tasks one stage forward or send them back to an earlier stage of their
/// taskset's pipeline.
/// </para>
/// </summary>
public record BulkStageRequest
{
    [JsonPropertyName("ids")]
    [MinLength(1)]
    [MaxLength(500)]
    public required IReadOnlyList<Guid> Ids { get; init; }

    [JsonPropertyName("stage")]
    public required string Stage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
