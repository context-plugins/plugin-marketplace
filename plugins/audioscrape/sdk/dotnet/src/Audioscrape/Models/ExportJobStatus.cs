using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

/// <summary>
/// Response from <c>GET /api/workspaces/{workspace}/export/{job_id}</c>.
/// </summary>
public record ExportJobStatus
{
    /// <summary>
    /// Total size of the generated archive in bytes. <c>null</c> until completion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bytes")]
    public long? Bytes { get; init; }

    /// <summary>
    /// RFC 3339 UTC timestamp the job reached a terminal state. <c>null</c> while in flight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at")]
    public string? CompletedAt { get; init; }

    /// <summary>
    /// RFC 3339 UTC timestamp the job was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// RFC 3339 UTC timestamp at which <c>download_url</c> stops working.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("download_expires_at")]
    public string? DownloadExpiresAt { get; init; }

    /// <summary>
    /// Signed download URL, valid for 15 minutes from this response. Present
    /// only when <c>status == "completed"</c>; poll the job again for a fresh one.
    /// A finished export stays downloadable for 7 days, then reads <c>expired</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("download_url")]
    public string? DownloadUrl { get; init; }

    /// <summary>
    /// Human-readable failure reason. Set only when <c>status == "failed"</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error_message")]
    public string? ErrorMessage { get; init; }

    /// <summary>
    /// Numeric job ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// Number of items packaged in the export. <c>null</c> until completion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("item_count")]
    public int? ItemCount { get; init; }

    /// <summary>
    /// One of <c>queued</c>, <c>running</c>, <c>completed</c>, <c>failed</c>, <c>expired</c>.
    /// </summary>
    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
