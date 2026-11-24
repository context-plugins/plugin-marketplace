using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record JobImportTrajectoryResponse
{
    [JsonPropertyName("trace_id")]
    public required Guid TraceId { get; init; }

    /// <summary>
    /// Telemetry spans the trajectory became
    /// </summary>
    [JsonPropertyName("span_count")]
    public required int SpanCount { get; init; }

    /// <summary>
    /// False when the trace already had a trajectory
    /// </summary>
    [JsonPropertyName("ingested")]
    public required bool Ingested { get; init; }

    /// <summary>
    /// Trajectory references stored but not fetched
    /// </summary>
    [JsonPropertyName("warnings")]
    public required IReadOnlyList<string> Warnings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
