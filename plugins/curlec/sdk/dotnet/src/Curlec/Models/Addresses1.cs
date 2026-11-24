using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Addresses1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("residential")]
    public Residential? Residential { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
