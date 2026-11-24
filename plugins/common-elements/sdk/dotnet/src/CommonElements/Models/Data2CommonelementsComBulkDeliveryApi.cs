using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record Data2CommonelementsComBulkDeliveryApi
{
    /// <summary>
    /// queued, running, succeeded, failed, or cancelled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Rows written so far, or in total once finished.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rows_written")]
    public double? RowsWritten { get; init; }

    /// <summary>
    /// How many parts the artifact was split into.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("part_count")]
    public double? PartCount { get; init; }

    /// <summary>
    /// Signed download link, present only while the delivery is downloadable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("download_url")]
    public string? DownloadUrl { get; init; }

    /// <summary>
    /// Machine-readable failure reason. Switch on this, not on the message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error_code")]
    public string? ErrorCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
