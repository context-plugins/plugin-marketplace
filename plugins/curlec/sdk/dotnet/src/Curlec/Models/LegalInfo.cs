using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record LegalInfo
{
    /// <summary>
    /// Business PAN number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pan")]
    public string? Pan { get; init; }

    /// <summary>
    /// GST number (22 chars).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gst")]
    public string? Gst { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
