using System;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record FilterByDepartment
{
    [JsonPropertyName("department")]
    public required string Department { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startDate")]
    public DateTimeOffset? StartDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
