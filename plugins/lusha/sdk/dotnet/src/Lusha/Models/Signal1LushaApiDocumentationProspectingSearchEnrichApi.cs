using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

/// <summary>
/// Filter contacts by signal types (premium filter - charges apply per signal type)
/// </summary>
public record Signal1LushaApiDocumentationProspectingSearchEnrichApi
{
    /// <summary>
    /// Signal types to filter by
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("names")]
    public IReadOnlyList<Name1LushaApiDocumentationProspectingSearchEnrichApi>? Names { get; init; }

    /// <summary>
    /// Start date for signal detection (YYYY-MM-DD format)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
