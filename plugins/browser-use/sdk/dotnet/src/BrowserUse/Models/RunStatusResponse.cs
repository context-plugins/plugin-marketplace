using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models;

/// <summary>
/// Minimal poll target: just the run's status. Poll this until terminal
/// (cheap indexed lookup, tiny payload — never the task/result text), then
/// fetch the full RunSummary once via GET /runs/{id}. Mirrors v2's
/// GET /tasks/{id}/status.
/// </summary>
public record RunStatusResponse
{
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
