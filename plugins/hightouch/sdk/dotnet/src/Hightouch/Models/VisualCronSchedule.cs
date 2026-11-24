using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record VisualCronSchedule
{
    [JsonPropertyName("expressions")]
    public required IReadOnlyList<Expression> Expressions { get; init; }
}
