using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Schedule
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("reportId")]
    public required Guid ReportId { get; init; }

    [JsonPropertyName("reportSlug")]
    public required string ReportSlug { get; init; }

    [JsonPropertyName("reportTitle")]
    public required string ReportTitle { get; init; }

    [JsonPropertyName("reportUrl")]
    public required string ReportUrl { get; init; }

    [JsonPropertyName("agentId")]
    public required Guid AgentId { get; init; }

    [JsonPropertyName("agentName")]
    public required string AgentName { get; init; }

    [JsonPropertyName("recurrence")]
    public required string Recurrence { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonPropertyName("lastRunAt")]
    public required string? LastRunAt { get; init; }

    [JsonPropertyName("nextRunAt")]
    public required string? NextRunAt { get; init; }

    [JsonPropertyName("currentVersion")]
    public required double? CurrentVersion { get; init; }

    [JsonPropertyName("due")]
    public required bool Due { get; init; }

    [JsonPropertyName("dueSince")]
    public required string? DueSince { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
