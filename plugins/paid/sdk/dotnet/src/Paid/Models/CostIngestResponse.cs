using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CostIngestResponse
{
    /// <summary>
    /// Number of records persisted.
    /// </summary>
    [JsonPropertyName("ingested")]
    public required int Ingested { get; init; }

    /// <summary>
    /// Number of records skipped because their <c>idempotencyKey</c> matched a previously ingested record.
    /// </summary>
    [JsonPropertyName("duplicates")]
    public required int Duplicates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
