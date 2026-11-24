using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record IncludeLushaSignalsApi
{
    /// <summary>
    /// Refines linkedinActivityIntent results by Bombora intent category. Only applies when linkedinActivityIntent is requested (via signalTypes or allSignals). See GET /v3/companies/signals/filters/intentCategories for valid values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentCategories")]
    public IReadOnlyList<string>? IntentCategories { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
