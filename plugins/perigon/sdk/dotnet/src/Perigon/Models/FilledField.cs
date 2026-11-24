using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Models.Enums;

namespace Perigon.Models;

/// <summary>
/// Event fields populated by enrichment and the sources used for each field.
/// </summary>
public record FilledField
{
    /// <summary>
    /// Name of the event data field populated by enrichment.
    /// </summary>
    [JsonPropertyName("field")]
    public required string Field { get; init; }

    /// <summary>
    /// Search method used to populate the field. Accepts WEB_SEARCH or ARTICLE_SEARCH.
    /// </summary>
    [JsonPropertyName("method")]
    public required MethodPerigonMonitorsApi Method { get; init; }

    /// <summary>
    /// How enrichment was initiated. Accepts MANUAL or BACKGROUND.
    /// </summary>
    [JsonPropertyName("source")]
    public required Source1 Source { get; init; }

    /// <summary>
    /// Sources used to populate the field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public IReadOnlyList<Source>? Sources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
