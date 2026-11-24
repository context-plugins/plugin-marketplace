using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record SpecialHours
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specialHourPeriods")]
    public IReadOnlyList<SpecialHourPeriod>? SpecialHourPeriods { get; init; }
}
