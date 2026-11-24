using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record MoreHour
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hoursTypeId")]
    public string? HoursTypeId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("periods")]
    public IReadOnlyList<Period>? Periods { get; init; }
}
