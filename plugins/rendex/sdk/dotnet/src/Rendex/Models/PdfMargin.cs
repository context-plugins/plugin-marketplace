using System.Text.Json.Serialization;
using Rendex.Core.Models;

namespace Rendex.Models;

/// <summary>
/// Page margins for PDF output (CSS units, e.g. "1cm", "0.5in")
/// </summary>
public record PdfMargin
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top")]
    public string? Top { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("right")]
    public string? Right { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bottom")]
    public string? Bottom { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("left")]
    public string? Left { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
