using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record SummaryResponse
{
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("ipd")]
    public required int Ipd { get; init; }

    [JsonPropertyName("revenue")]
    public required int Revenue { get; init; }

    [JsonPropertyName("downloads")]
    public required int Downloads { get; init; }

    [JsonPropertyName("available")]
    public required int Available { get; init; }

    [JsonPropertyName("removed")]
    public required int Removed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
