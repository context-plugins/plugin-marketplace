using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record LegalInfo1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pan")]
    public string? Pan { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gst")]
    public string? Gst { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
