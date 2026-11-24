using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Provenance for event fields populated by the enrichment process.
/// </summary>
public record FillbotMetadata
{
    /// <summary>
    /// Event fields populated by enrichment and the sources used for each field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filledFields")]
    public IReadOnlyList<FilledField>? FilledFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
