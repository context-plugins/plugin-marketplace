using System.Collections.Generic;
using System.Text.Json.Serialization;
using CarsXe.Core.Models;

namespace CarsXe.Models;

public record Result
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vin")]
    public string? Vin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasRecalls")]
    public bool? HasRecalls { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recallCount")]
    public int? RecallCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recalls")]
    public IReadOnlyList<object>? Recalls { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
