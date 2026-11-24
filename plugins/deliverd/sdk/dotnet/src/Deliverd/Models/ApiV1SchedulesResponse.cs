using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1SchedulesResponse
{
    [JsonPropertyName("schedules")]
    public required IReadOnlyList<Schedule> Schedules { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
