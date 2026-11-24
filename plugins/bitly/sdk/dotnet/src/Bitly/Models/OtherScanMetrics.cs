using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record OtherScanMetrics
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("other_city_scans")]
    public int? OtherCityScans { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("no_city_scans")]
    public int? NoCityScans { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
