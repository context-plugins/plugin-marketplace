using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// Raw log listing for the request table.
/// <para>
/// Aggregates (totals, group-bys) live on ``GET /v2/usage/inference``.
/// </para>
/// </summary>
public record InferenceUsageResponse
{
    [JsonPropertyName("logs")]
    public required IReadOnlyList<InferenceUsageLog> Logs { get; init; }

    [JsonPropertyName("total_count")]
    public required int TotalCount { get; init; }

    [JsonPropertyName("team_id")]
    public required Guid TeamId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
