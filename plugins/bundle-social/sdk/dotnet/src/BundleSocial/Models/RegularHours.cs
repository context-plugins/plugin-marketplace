using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record RegularHours
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("periods")]
    public IReadOnlyList<Period>? Periods { get; init; }
}
