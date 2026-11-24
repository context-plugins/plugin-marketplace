using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record BrokerageTaxes
{
    /// <summary>
    /// GST charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gst")]
    public double? Gst { get; init; }

    /// <summary>
    /// STT charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stt")]
    public double? Stt { get; init; }

    /// <summary>
    /// Stamp duty charges
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stamp_duty")]
    public double? StampDuty { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
