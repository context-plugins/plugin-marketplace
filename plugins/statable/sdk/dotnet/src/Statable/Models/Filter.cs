using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Statable.Models.Enums;

namespace Statable.Models;

public record Filter
{
    /// <summary>
    /// Field name WITHOUT the visit:/event: prefix. Geo fields take codes, not names (country/region = ISO/subdivision codes, city = numeric geoname_id — the values geo breakdowns return). The <c>event</c> field filters by a custom event name (an <c>event:name</c> breakdown value) and restricts the whole query to that event's sessions; it accepts ONLY operator <c>is</c> with a single non-standard value (not <c>pageview</c> / <c>engagement</c>) — other forms return <c>invalid_filter</c>.
    /// </summary>
    [JsonPropertyName("field")]
    public required Field Field { get; init; }

    [JsonPropertyName("operator")]
    public required OperatorStatableStatsApi Operator { get; init; }

    /// <summary>
    /// OR-ed together. A value may not contain a comma.
    /// </summary>
    [JsonPropertyName("values")]
    [MinLength(1)]
    public required IReadOnlyList<string> Values { get; init; }
}
