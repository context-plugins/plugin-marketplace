using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1SchedulesRequest
{
    [JsonPropertyName("reportId")]
    public required Guid ReportId { get; init; }

    [JsonPropertyName("agentId")]
    public required Guid AgentId { get; init; }

    /// <summary>
    /// Five-field cron in UTC, e.g. 0 9 * * 5
    /// </summary>
    [JsonPropertyName("recurrence")]
    public required string Recurrence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
