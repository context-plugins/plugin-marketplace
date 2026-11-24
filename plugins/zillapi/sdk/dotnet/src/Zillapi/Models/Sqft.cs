using System.Text.Json.Serialization;
using Zillapi.Core.Models;

namespace Zillapi.Models;

/// <summary>
/// Living-area range in square feet.
/// </summary>
public record Sqft
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("min")]
    public int? Min { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max")]
    public int? Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
