using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record IdrQueueForReprocessingInput
{
    /// <summary>
    /// e.g. [{ identifier: "email", value: "a@b.com" }]
    /// Identifier values will be queued for reprocessing.
    /// Clusters containing these identifiers will be reprocessed on the next run.
    /// </summary>
    [JsonPropertyName("identifiers")]
    [MaxLength(1000)]
    public required IReadOnlyList<Identifier> Identifiers { get; init; }

    /// <summary>
    /// If true, identifier values will also be added to the blocklist and ignored in future runs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("block")]
    public bool? Block { get; init; } = true;
}
