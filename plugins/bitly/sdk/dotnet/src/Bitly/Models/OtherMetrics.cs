using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record OtherMetrics
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("other_city_clicks")]
    public int? OtherCityClicks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("no_city_clicks")]
    public int? NoCityClicks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
