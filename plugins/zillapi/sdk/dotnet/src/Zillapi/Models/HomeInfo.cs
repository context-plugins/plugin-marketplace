using System.Text.Json.Serialization;
using Zillapi.Core.Models;

namespace Zillapi.Models;

public record HomeInfo
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("homeStatus")]
    public string? HomeStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daysOnZillow")]
    public int? DaysOnZillow { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("listing_sub_type")]
    public object? ListingSubType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
