using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

/// <summary>
/// Response from <c>POST /api/workspaces/{workspace}/export</c>.
/// </summary>
public record CreateExportJobResponse
{
    /// <summary>
    /// Numeric ID of the newly created export job.
    /// </summary>
    [JsonPropertyName("job_id")]
    public required long JobId { get; init; }

    /// <summary>
    /// Always <c>"queued"</c> immediately after creation.
    /// </summary>
    [JsonPropertyName("status")]
    public required string Status { get; init; }

    /// <summary>
    /// Relative URL clients should poll for status + the eventual download URL.
    /// </summary>
    [JsonPropertyName("status_url")]
    public required string StatusUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
