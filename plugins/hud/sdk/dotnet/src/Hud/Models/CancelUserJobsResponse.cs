using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// "Stop everything" result, grouped by job so callers can show a breakdown.
/// </summary>
public record CancelUserJobsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; } = "accepted";

    [JsonPropertyName("jobs_cancelled")]
    public required int JobsCancelled { get; init; }

    [JsonPropertyName("total_tasks_cancelled")]
    public required int TotalTasksCancelled { get; init; }

    [JsonPropertyName("job_details")]
    public required IReadOnlyList<CancelUserJobsJobDetail> JobDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
