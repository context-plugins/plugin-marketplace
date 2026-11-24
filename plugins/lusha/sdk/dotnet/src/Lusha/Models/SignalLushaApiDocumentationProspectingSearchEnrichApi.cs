using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Models.Enums;

namespace Lusha.Models;

/// <summary>
/// Filter companies by signal types (premium filter - charges apply per signal type).
/// </summary>
public record SignalLushaApiDocumentationProspectingSearchEnrichApi
{
    /// <summary>
    /// Signal types to filter by
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("names")]
    public IReadOnlyList<NameLushaApiDocumentationProspectingSearchEnrichApi>? Names { get; init; }

    /// <summary>
    /// Start date for signal detection (YYYY-MM-DD format)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
