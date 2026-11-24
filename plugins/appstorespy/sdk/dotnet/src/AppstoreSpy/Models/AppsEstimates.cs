using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record AppsEstimates
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("month")]
    public required string Month { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("downloads")]
    public int? Downloads { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue")]
    public int? Revenue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
