using System.Text.Json.Serialization;
using BundleSocial.Models.AnyOf;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Period
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openDay")]
    public OpenDay? OpenDay { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openTime")]
    public OpenTime1? OpenTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closeDay")]
    public CloseDay? CloseDay { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closeTime")]
    public CloseTime1? CloseTime { get; init; }
}
