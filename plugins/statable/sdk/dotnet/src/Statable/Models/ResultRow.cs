using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record ResultRow
{
    /// <summary>
    /// Absent for aggregate queries. Keyed by the requested dimension string. For geo breakdowns the value is the round-trip code (visit:country → ISO alpha-2, visit:region → subdivision code, visit:city → numeric geoname_id) — exactly what the matching filter accepts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyDictionary<string, string>? Dimensions { get; init; }

    /// <summary>
    /// Present only on geo breakdowns — the human-readable display name for the code in <c>dimensions</c>, keyed by the same dimension.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// The requested metrics for this row.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyDictionary<string, double>? Metrics { get; init; }

    /// <summary>
    /// Present only when the request set <c>compare</c>. Keyed by metric → {value, change}: the metric's value in the compare window and the percent change vs it. Not emitted on event:status_code / event:goal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compare")]
    public IReadOnlyDictionary<string, Compare>? Compare { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
